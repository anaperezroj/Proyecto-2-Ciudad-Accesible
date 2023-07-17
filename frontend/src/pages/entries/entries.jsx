
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Entries() {
   //const [entrie, setEntrie] = useState();
  const { id } = useParams();

  useEffect  (() => {
     
    //Llamaríamos a nues tro servicio para coger la tarea
     const response = await getEntrie(id);
     setEntrie(response.data.entrie)
  }, []);

  return <>{`Entrada con el id ${id}`}</>;
}

export default entries;
