import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

const NameContext = createContext();

const StoreContext = (props)=>{

    const [search,setSearch] = useState({
        title:"",
        location:"",
    });

    const [isSearch,setIsSearch] = useState(false);
    const[job,setJob] = useState([]);

    const fetchJobs = async()=>{
        setJob(jobsData);
    }

    useEffect(()=>{
        fetchJobs();
    },[job]);

    const userData ={
        setSearch,search,
        setIsSearch,isSearch,
        setJob,job,
    }
    return (<div>
        <NameContext.Provider value={userData}>
            {props.children}
        </NameContext.Provider>
    </div>)
}

export default StoreContext;
export {NameContext};