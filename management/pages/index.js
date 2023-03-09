import Head from 'next/head'
import Table from '../components/table'
import { BsPersonFillAdd } from 'react-icons/bs'
import Form from '../components/form'
import { useState } from 'react'
export default function Home() {


	const [visible, setVisible] = useState(false);

	const handler = (e) =>
	{
		if (!visible)
			setVisible(true);
		else
			setVisible(false);
	}

  return (
	<section>
	  <Head>
		<title>Crud Application</title>
	  </Head>

	  <main className='py-5'>
	  <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Employee Management</h1>

	  <div className='container mx-auto flex justify-between py-5 border-b'>
	  <div className="left flex gap-3">
		<button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-indigo-700 hover:text-zinc-700'>Add Employee <BsPersonFillAdd size={19} /></button>

	  </div>
	  </div>

	<div className="container mx-auto">
		{visible ? <Form></Form> : <></>}
		
	
	</div>

	  <div className="container mx-auto">
	  <Table/>
	  
	  </div>
	  </main>
	</section>
  )
}
