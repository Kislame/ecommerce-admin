import Table from './Table';
import { useState } from 'react';
function Userlist() {
  const [data, setData] = useState([
    {
      id: 1,
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 5,
      avatar:
        'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 6,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 7,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 8,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 9,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jon Doe',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
    {
      id: 10,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'Jull ame',
      email: 'jonsnow@gmail.com',
      status: 'active',
      transactions: '$122.5',
    },
  ]);
  return (
    <>
      <Table rows={data} setData={setData} />
    </>
  );
}

export default Userlist;
