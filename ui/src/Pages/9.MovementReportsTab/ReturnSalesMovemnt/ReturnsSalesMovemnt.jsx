import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedGroupId } from "../../../Store/groups.js";
import {
  getNodesIn,
  getOtherPermissions,
} from "../../../Store/otherPermissions.js";
import { GET_MOVEMENT_TABLE } from "../../../Services/ApiServices/MovementApi";
import Movements from "../../../Modals/SearchBillsTableANDmovements/Movements";
function ReturnsSalesMovemnt() {
  const [nodes, setNodes] = useState([]);

  let pageDataType = useMemo(() => {
    return {
      invokestype: "ReturnSales",
      typeText: "Sales Return Movement",
      type: "إرجاع المبيعات",
    };
  }, []);
  let defualtdate = useMemo(() => {
    let defualtdateValue = new Date();
    return (
      (parseInt(defualtdateValue.getMonth()) + 1).toString() +
      "/" +
      defualtdateValue.getDate() +
      "/" +
      defualtdateValue.getFullYear()
    ).toString();
  }, []);
  let [values, setvalues] = useState({
    from: defualtdate,
    to: defualtdate,
    branch: 0,
  });
  let dispatch = useDispatch();
  let nodesIn = useSelector(getNodesIn);
  let [data, setData] = useState([]);
  const handleChange = useCallback(({ name, value }) => {
    setvalues((prev) => {
      return { ...prev, [name]: value };
    });
  }, []);
  useEffect(async () => {
    if (nodesIn.length > 0) {
      setNodes(
        nodesIn.map((R) => {
          return { id: parseInt(R.num), name: R.name };
        })
      );
      let list = await GET_MOVEMENT_TABLE(
        pageDataType.type,
        nodesIn[0].num,
        defualtdate,
        defualtdate
      );
      setData(list);
      handleChange({ name: "branch", value: parseInt(nodesIn[0].num) });
    }
  }, [nodesIn]);
  useEffect(async () => {
    dispatch(await setSelectedGroupId(1));
    dispatch(await getOtherPermissions());
  }, []);

  return (
    <Movements
      pageDataType={pageDataType}
      values={values}
      handleChange={handleChange}
      data={data}
      setData={setData}
      apimethod={GET_MOVEMENT_TABLE}
      nodes={nodes}
    />
  );
}
export default ReturnsSalesMovemnt;
