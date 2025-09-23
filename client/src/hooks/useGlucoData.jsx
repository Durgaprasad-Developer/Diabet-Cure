import { useEffect, useState } from "react";
import { getGlucose, getGlucoseAverages, getGlucoseSummary } from "../apicalls/glucoCalls";


export default function useGlucoData(){
const [rawGluco, setRawgluco] = useState("");
const [averageGluco, setAveragegluco] = useState("");
const [summaryGluco, setSummarygluco] = useState("");
const [loading, setLoading] = useState(true);

useEffect(()=>{
  const fetchData = async() => {
    try{
  const raw = await getGlucose();
  const average = await getGlucoseAverages();
  const summary = await getGlucoseSummary();
  setRawgluco(raw.data);
  setAveragegluco(average.averages);
  setSummarygluco(summary);
    }catch(err){
        console.error("error while using useGluco", err);
    }finally{
        setLoading(false);
    }
  }
  fetchData();
},[])
return {rawGluco, averageGluco, summaryGluco, loading}
}