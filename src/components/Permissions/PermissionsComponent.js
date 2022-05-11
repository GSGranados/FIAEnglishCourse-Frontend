import React, { useEffect } from 'react'
import Table from '../Utilities/table'
import { useSelector,useDispatch } from 'react-redux';
import { getPermissions} from '../../reducers/permissions/permissionsReducer';
export const PermmissionsComponent = () => {
  const dispatch = useDispatch();
  const permissions = useSelector((state)=> state.permissions)
  useEffect(() => {
    dispatch(getPermissions())
  }, [permissions,dispatch])
  
  return (
    <div className="p-7 text-2xl font-semibold w-full flex-1  h-[calc(100%_-_4rem)]">
      <h1>Permissions</h1>
      <Table/>
    </div>
  )
}
