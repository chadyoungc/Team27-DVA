import React, { useState, useEffect } from "react";
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import HC_more from 'highcharts/highcharts-more';
import { RecipeTable } from './RecipeTable'

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: "'Shippori Antique B1', sans-serif"
        }
    },
    colors: ['#3d5afe', '#76ff03', '#d500f9', '#1de9b6', '#ff3d00', '#3d5afe', '#00e676', '#FFF263', '#6AF9C4']

});

const options = {
    chart: {
        type: 'networkgraph',
        plotBorderWidth: 1
    },
    title: {
        text: 'Networkgraph with random initial positions'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to']
        }
    },
    series: [{
        layoutAlgorithm: {
            enableSimulation: true,
            initialPositions: function () {
                var chart = this.series[0].chart,
                    width = chart.plotWidth,
                    height = chart.plotHeight;

                this.nodes.forEach(function (node) {
                    // If initial positions were set previously, use that
                    // positions. Otherwise use random position:
                    node.plotX = node.plotX === undefined ?
                        Math.random() * width : node.plotX;
                    node.plotY = node.plotY === undefined ?
                        Math.random() * height : node.plotY;
                });
            }
        },
        name: 'K8',
        data: [
            ['A', 'B'],
            ['A', 'C'],
            ['A', 'D'],
            ['A', 'E'],
            ['A', 'F'],
            ['A', 'G'],

            ['B', 'C'],
            ['B', 'D'],
            ['B', 'E'],
            ['B', 'F'],
            ['B', 'G'],

            ['C', 'D'],
            ['C', 'E'],
            ['C', 'F'],
            ['C', 'G'],

            ['D', 'E'],
            ['D', 'F'],
            ['D', 'G'],

            ['E', 'F'],
            ['E', 'G'],

            ['F', 'G']
        ]
    }]
};


HC_more(Highcharts);

export const RecipeNetwork = (props) => {
    return (
        <>
            Hello 
            <div id="networkContainer">
                <HighchartsReact highcharts={Highcharts} options={options}/>
            </div>
        </>
    )
}
