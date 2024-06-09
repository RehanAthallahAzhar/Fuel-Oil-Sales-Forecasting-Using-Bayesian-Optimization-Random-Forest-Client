import React, { useState, useEffect } from 'react';
import { Box, Card, CardHeader, CardBody, Heading } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';


const HistoryChart = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/read-data-by-year/2023');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Format data untuk digunakan dalam Chart.js
    const chartData = {
      labels: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ],
      datasets: [
        {
          label: 'Stok keluar 2023',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: data,
        },
      ],
    };
  
    return (
      <>
        <Card data-type='Card' height='370px' width='50%'>
          <CardHeader data-type='CardHeader'>
              <Heading data-type='Heading' size='md'>Monthly Report Prediction</Heading>
          </CardHeader>

          <CardBody data-type='CardBody'>
          <Box w="100%" mx="auto" mt={8}>
          <Bar
            data={chartData}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                  },
                }],
              },
            }}
          />
        </Box>
          </CardBody>
        </Card>
      </>



    );
  };
  
  export default HistoryChart;
  