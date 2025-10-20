import { useEffect, useState } from "react";
import { getGlucose, getGlucoseAverages, getGlucoseMain, getGlucoseSummary } from "../apicalls/glucoCalls";





export default function useGlucoData(){
const [mainGluco, setMaingluco] = useState(null);
const [rawGluco, setRawgluco] = useState("");
const [averageGluco, setAveragegluco] = useState("");
const [summaryGluco, setSummarygluco] = useState("");
const [loading, setLoading] = useState(true);

useEffect(()=>{
  const fetchData = async() => {
    try{
const raw = await getGlucose();
  const main = await getGlucoseMain();
  const average = await getGlucoseAverages();
  const summary = await getGlucoseSummary();
  setRawgluco(raw);
  setMaingluco(main);
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
return {rawGluco, mainGluco, averageGluco, summaryGluco, loading}
}