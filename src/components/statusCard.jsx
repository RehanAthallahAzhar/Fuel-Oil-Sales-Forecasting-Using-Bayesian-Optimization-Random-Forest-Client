import { Card, 
        CardBody,
        Stat,
        StatLabel,
        StatNumber,
        StatHelpText,
        StatArrow
} from '@chakra-ui/react'
import FormatRupiah from '../utlis/formatAngka'

export default function StatusCard({label, data, rupiah, profitType, displayProfit, profitValue}) {
    return (
        <Card data-type='Card'
        overflow='hidden'
        variant='outline'
        minW='200px'
        maxW='500px'
        h='120px'
        mb={10}
        >
            <CardBody data-type='CardBody'>
            <Stat data-type='Stat'>
                <StatLabel data-type='StatLabel' fontSize='md'>{label}</StatLabel>
                <StatNumber data-type='StatNumber'>
                    {data}
                    {rupiah && !isNaN(rupiah) ? FormatRupiah(rupiah) : null}
                </StatNumber>
                <StatHelpText data-type='StatHelpText' style={{ display: displayProfit, marginBottom: displayProfit === 'none' ? '-20px' : '0' }}>
                <StatArrow data-type='StatArrow' type={profitType}></StatArrow>
                {profitValue}%
                </StatHelpText>
            </Stat>
            </CardBody>
        </Card>

    )
}