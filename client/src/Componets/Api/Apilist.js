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


import { DeleteData } from '../../State/Action';
import { Country, State } from 'countries-state-list';
import ApiModal from './ApiModal';


function Apilist(props) {


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

        setStateList()
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
                                <TableCell align="left">#</TableCell>
                                <TableCell align="center">Full Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Web Site</TableCell>
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
                                        <TableCell align="center">{item.name} {item.firstName} {item.lastName} </TableCell>
                                        <TableCell align="center">{item.email}</TableCell>
                                        <TableCell align="center">{item.website}</TableCell>
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

                {open && <ApiModal modalcallbak={modalcallbak} passdata={passdata} stateList={stateList} /> }
            </div>
            {/* <Modaledit updateid={updateid} updatetitel={updatetitel} textarea={textarea} /> */}
        </>
    )
}

export default Apilist
