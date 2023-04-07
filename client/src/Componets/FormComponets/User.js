import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Model from './Model';
import { DeleteData } from '../../State/Action';
import { Country, State } from 'countries-state-list';



function User() {


    const dispatch = useDispatch();
    const listData = useSelector(state => state.notes)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };



    const [passdata, setPassdata] = useState({});
    const [stateList, setStateList] = useState([]);

    const obj = Country.getAllCountries()
    const obj2 = State.getAllStates()

    const [open, setOpen] = useState(false);
    const modalcallbak = (val) => {
        if (false == val) {
            setOpen(false)
        }
    }

    const update = (edititem) => {
        setPassdata(edititem);

        let filterCountry = obj.filter((item) => item.name === edititem.country)[0];
        let stateListFilter = obj2.filter((item) => item.countryCode === filterCountry.isoCode);

        setStateList(stateListFilter)
        if (open == false) {
            setOpen(true)
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">Full Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone no.</TableCell>
                                <TableCell align="center">Country</TableCell>
                                <TableCell align="center">State</TableCell>
                                <TableCell align="center">Edit / Remove</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {listData.map((item, i) => {
                                return (
                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{i + 1}</TableCell>
                                        <TableCell align="center">{item.firstName} {item.lastName}</TableCell>
                                        <TableCell align="center">{item.email}</TableCell>
                                        <TableCell align="center">{item.mobile}</TableCell>
                                        <TableCell align="center">{item.country}</TableCell>
                                        <TableCell align="center">{item.state}</TableCell>
                                        <TableCell align="center">
                                            <button className=' btn  btn-outline-dark mx-2' onClick={() => update(item)}>
                                                <EditIcon />
                                            </button>
                                            <button className=' btn  btn-outline-danger' onClick={() => dispatch(DeleteData(item.id))} ><DeleteForeverIcon /> </button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                        
                    </Table>
                </TableContainer>

                {open && <Model modalcallbak={modalcallbak} passdata={passdata} stateList={stateList} />}

            </div>
            {/* <Modaledit updateid={updateid} updatetitel={updatetitel} textarea={textarea} /> */}
        </>
    )
}
export default User;
