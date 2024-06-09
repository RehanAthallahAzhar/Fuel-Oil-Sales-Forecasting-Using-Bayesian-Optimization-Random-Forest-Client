import React, { useEffect, useRef, useState } from 'react';
import { Text,Box } from '@chakra-ui/react'
import Chart from 'chart.js/auto';

import { Card, 
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
} from '@chakra-ui/react'

function PredictChart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({});
    let monthPredict
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/bo-rfr-prediction/01/14/3');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        monthPredict = data.month
    
        const namaBulan = data.month; // Mengambil nama bulan dari respon API
        const jumlahHari = data.data.length;
    
        let labels = Array.from({ length: jumlahHari }, (_, i) => i + 1); // Label awal hanya berupa angka
    
        // Mendapatkan indeks bulan pertama
        const indeksBulanPertama = data.data[0].tanggal;
        
        // Mengonversi indeks bulan pertama menjadi nama bulan
        const namaBulanPertama = namaBulan;
    
        // Menambahkan nama bulan di bawah label pertama
        labels[indeksBulanPertama - 1] = `${namaBulanPertama} ${labels[indeksBulanPertama - 1]}`;
    
        const newChartData = {
          labels: labels,
          datasets: [{
            label: 'Prediction Data',
            data: data.data.map(item => item.prediksi), // Menggunakan data prediksi dari respon API
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
          }]
        };
        setChartData(newChartData);
        drawChart(newChartData);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
  
    const drawChart = (data) => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      const ctx = document.getElementById('myChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Tanggal'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Trip'
              },
              beginAtZero: true
            }
          }
        }
      });
    };
  
    return (
        <>
        <Card data-type='Card' ps={6} mb={10} maxWidth='1600px'>
          <CardHeader data-type='CardHeader'>
            <Heading data-type='Heading' size='lg' fontWeight="bold">Prediksi Berikutnya</Heading>
            </CardHeader>
          <CardBody data-type='CardBody'>
            <Box maxW='80%' centerContent>
              <canvas id="myChart"></canvas>
            </Box>
            </CardBody>
          <CardFooter data-type='CardFooter'>
            <Text color='lightGray' fontSize='sm' fontWeight='bold'>Note : prediksi menggunakan Random Forest Regressor</Text>
            </CardFooter>
          </Card>

        </>
    );
  }

export default PredictChart;
