import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CardComponent from './card'
import axios from 'axios'

const baseUrl = "https://www.breakingbadapi.com/api/"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
      color: "gray",
      
      left: 20
    },
    sort: {

    },
    cards: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        alignContent: "Center",
        marginTop: 40,
        width: "80%"
    },
    moreButton:{

    }
  }));

const HomeComponent  = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(6)
    const [charactersList, setCharactersList] = useState([])

    useEffect(() =>{
        axios.get(`${baseUrl}characters?limit=${limit}&offset=0`)
        .then(res => {
            setCharactersList(res.data)
            setLoading(false)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Sort By</h1>
            </div>
            <div className={classes.sort}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
            <div className={classes.cards}>
                {
                    (loading) ? <h2>Loading...</h2> :
                    charactersList.map((e, i) => ( 
                        <CardComponent key={i} img={e.img} name={e.name} occupation={e.occupation} status={e.status} birthday={e.birthday}/>
                    ))
                }
            </div>
            <div className={classes.moreButton}>
                <Button variant="contained" color="primary">
                    Show More
                </Button>
            </div>
        </div>
    )
}

export default HomeComponent