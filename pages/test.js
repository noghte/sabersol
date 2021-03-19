import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';


export default function Test() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="bg-white font-family-karla">
          <div className="inline-block mr-2 mt-2">
                   <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Primary</button>
                </div>
    </div>
  )
}
