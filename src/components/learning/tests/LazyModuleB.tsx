import CallAPIUsingAxios from "../Call_API_Using_Axios/CallAPIUsingAxios";

export default function LazyModuleB() {
    return <CallAPIUsingAxios apiUrl="https://jsonplaceholder.typicode.com/posts/2?delay=3000" />;
}
