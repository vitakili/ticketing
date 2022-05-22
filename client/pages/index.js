import buildClient from "../api/build-client";

const LandingPage = ({currentUser}) => {

    return currentUser ? <h1>You are signed in</h1> : <h1>You aren't signed in</h1>
}

export const getServerSideProps = async (context) => {
        const client = buildClient(context);
        // We are on the server
        // Request should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/me
        const { data } = await client.get('/api/users/currentuser');

        return {props: data};


};

export default LandingPage;