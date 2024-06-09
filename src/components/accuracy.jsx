import React, { Component } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import Chart from 'chart.js/auto';

class AccuracyCard extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.chart = null;
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext('2d');

    if (!this.chart) {
      this.chart = new Chart(myChartRef, {
        type: 'doughnut',
        data: {
          labels: ['Benar', 'Salah'],
          datasets: [{
            label: 'Akurasi',
            data: [this.props.correct, this.props.wrong],
            backgroundColor: [
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 99, 132, 0.7)',
            ],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    } else {
      this.chart.data.datasets[0].data = [this.props.correct, this.props.wrong];
      this.chart.update();
    }
  }

  render() {
    return (
      <Box borderWidth="1px" borderRadius="md" overflow="hidden" p="4" width='25%'>
        <Heading as="h5" size="md" mb="3" textAlign="center">Akurasi</Heading>
        <Box>
          <canvas
            id="accuracyChart"
            ref={this.chartRef}
            width="300"
            height="300"
          />
        </Box>
      </Box>
    );
  }
}

export default AccuracyCard;
