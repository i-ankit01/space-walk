import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DataPage from "./DataPage";
import "../animations/planet.css"

const DataPageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`;

    const fetchBodyData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching body:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBodyData();
  }, [id]);

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="loader" />
    </div>
  );
}
  if (!data) return <div className="text-red-500 text-center mt-10">No data found</div>;

  return <DataPage data={data} onBack={() => navigate(-1)} />;
};

export default DataPageWrapper;
