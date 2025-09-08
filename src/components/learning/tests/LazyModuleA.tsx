import CallAPIUsingAxios from "../Call_API_Using_Axios/CallAPIUsingAxios";

export default function LazyModuleA() {
    return <CallAPIUsingAxios apiUrl="https://jsonplaceholder.typicode.com/posts/1?delay=3000" />;
}
