import { Card, 
    CardBody,
    CardHeader,
    Heading,
    Stack,
    Box,
    Divider,
    Text
} from '@chakra-ui/react'

import FormatRupiah from '../utlis/formatAngka'

export default function ReportCard({salesTrip, salesRp}) {
    return (
        <Card data-type='Card' height='370px' width='25%'>
            <CardHeader data-type='CardHeader'>
                <Heading data-type='Heading' size='md'>Monthly Report Prediction</Heading>
            </CardHeader>

            <CardBody data-type='CardBody'>
                <Stack data-type='Stack' spacing='4'>
                <Box data-type='Box'>
                    <Heading data-type='Heading' size='xs' textTransform='uppercase'>
                    Average Sales next Month (Trip)
                    </Heading>
                    <Text data-type='Text' pt='2' fontSize='sm'>
                        {salesTrip}
                    </Text>
                </Box>
                <Divider data-type='Divider' orientation='horizontal'></Divider>
                <Box data-type='Box'>
                    <Heading data-type='Heading' size='xs' textTransform='uppercase'>
                    Average Sales next Month (Rp)
                    </Heading>
                    <Text data-type='Text' pt='2' fontSize='sm'>
                        {FormatRupiah(salesRp)}
                    </Text>
                </Box>
                <Divider data-type='Divider' orientation='horizontal'></Divider>
                <Box data-type='Box'>
                    <Heading data-type='Heading' size='xs' textTransform='uppercase'>
                    Analysis
                    </Heading>
                    <Text data-type='Text' pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
    )
}