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
        polar: true,
        type: 'area'
    },
    credits: {
        enabled: false,
    },
    title: {
        text: undefined,
    },
    pane: {
        size: '80%'
    },
    legend: {
        enabled: false,
    },
    xAxis: {
        categories: ['High sugar', 'Low carb', 'High protein', 'Low calorie',
            'High fiber', 'Low fat'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            format: '{text}%'
        },
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f}%</b><br/>'
    },
    plotOptions: {
        series: {
            fillOpacity: 0.4
        }
    },
    series: [{
        name: '% Daily Value',
        data: [50, 39, 42, 31, 60, 34],
        pointPlacement: 'on'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                pane: {
                    size: '70%'
                }
            }
        }]
    }
}

HC_more(Highcharts);

const InputRow = (props) => {
    const [userRecipeInput, setUserRecipeInput] = useState("")

    const handleRecipeInputChange = (e) => {
        setUserRecipeInput(e.target.value)
    }

    return (
        <>
            <div className="filter-row">
                <TextField
                    fullWidth
                    label="Dish name"
                    variant="standard"
                    value={userRecipeInput}
                    onChange={(e) => handleRecipeInputChange(e)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <div className="">
                <p>User inputted: {userRecipeInput}</p>
                <HighchartsReact highcharts={Highcharts} options={options} />

            </div>

        </>
    )
}

export default InputRow;