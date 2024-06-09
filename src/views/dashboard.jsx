import { Container, Text, Box, HStack, Flex, Spacer, Heading } from '@chakra-ui/react'

import PredictChart from "../components/predictChart";
import AccuracyCard from "../components/accuracy";
import NavLinks from "../components/navbar";
import StatusCard from '../components/statusCard';
import Footer from '../components/footer';
import ReportCard from '../components/reportCard';
import HistoryChart from '../components/historyChart';


const Dashboard = () => {
  return (
    <>
    <NavLinks/>
      
      <Container maxW='container.2xl' px={20}>
        <Heading fontSize="5xl" fontWeight="bold" my={10}>
            Dashboard
        </Heading>

        <HStack spacing='24px'>
          <StatusCard label='Total Penjualan' data = '120' displayProfit='none'/>
          <StatusCard label='Total Perkiraan Bulan Depan' data = '150' profitType = 'increase' profitValue= '23.36'/>
          <StatusCard label='Populasi' data = '84772' profitType = 'increase' profitValue= '0' />
          <StatusCard label='PRDB per Kapita' data = '35178' profitType = 'increase' profitValue= '0' />
          <StatusCard label='Harga' rupiah = '10000' profitType = 'increase' profitValue= '0'/>
        </HStack>

        <PredictChart/>

        <HStack spacing='24px' alignItems='start' mb={20}>
          <AccuracyCard correct={75} wrong={25} />
          <ReportCard salesTrip='120' salesRp='10000000'/>
          <HistoryChart/>
        </HStack>
      </Container>

      <Footer/>
    </>
  )
}

export default Dashboard;