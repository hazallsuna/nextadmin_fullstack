"use client"
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "P.tesi",
      gezinme: 4000,
      tıklanma: 2400,
    },
    {
      name: "Salı",
      gezinme: 3000,
      tıklanma: 1398,
    },
    {
      name: "Çar",
      gezinme: 2000,
      tıklanma: 3800,
    },
    {
      name: "Perş",
      gezinme: 2780,
      tıklanma: 3908,
    },
    {
      name: "Cuma",
      gezinme: 1890,
      tıklanma: 4800,
    },
    {
      name: "C.tesi",
      gezinme: 2390,
      tıklanma: 3800,
    },
    {
      name: "Pazar",
      gezinme: 3490,
      tıklanma: 4300,
    },
  ];
  

const Chart = () => {
    return(
        <div className={styles.container}>  <h2 className={styles.title}>Haftalık Özet</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
            <Legend />
            <Line type="monotone" dataKey="gezinme" stroke="#8884d8" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="tıklanma" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
          </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Chart