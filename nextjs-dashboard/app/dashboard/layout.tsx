'use client'

import SideNav from '@/app/ui/dashboard/sidenav';
import Card from '../ui/personalizados/card-text';
import CardImage from '../ui/personalizados/card-image';
import { useEffect, useState } from 'react';


export default function Layout({ children }: { children: React.ReactNode }) {
  
  const [ fact, setFact ] = useState<string>("")
  const [ firstThreeWors, setFirstThreeWors ] = useState<string>("")


  useEffect(() => {
    const apiFact = 'https://catfact.ninja/fact'
    fetch(apiFact).then(
      response => response.json()
    ).then(
      data => {
        setFact(data.fact)
        setFirstThreeWors(data.fact.split(" ").slice(0,3).join(" "))
      }
    )
  }, [])

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="w-full flex flex-row items-start gap-4 p-4 pt-10">
        <Card title="Fact" text={fact || ''} />
        <Card title="Primeras palabras" text={firstThreeWors} />
        <CardImage title={firstThreeWors} image={firstThreeWors}/>
      </div>
    </div>
  );
}
