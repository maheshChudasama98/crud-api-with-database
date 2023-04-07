import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// import User from '../FormComponets/User';
import { apiAdd } from '../../State/Action/Apiaction';
import Apilist from './Apilist';
import Apiform from './Apiform';
export default function Useapi() {

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const dispatch = useDispatch()

  const getData = async () => {
    const apidata = await fetch('https://jsonplaceholder.typicode.com/users')
    // const apidata = await fetch('http://localhost:8080/user/data')
    let data = await apidata.json()
    setItems(data)
    if (data.length > 0) {
      data.map((item) => {
        let name = item.name.split(' ');
        item.firstName = name[0];
        item.lastName = name[1];
        delete item.name
      })
    }
    dispatch(apiAdd(data))
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      <Apiform />
      <Apilist />
    </>
  );
}