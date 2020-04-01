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
        alignItems: "center"
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
        marginTop: 40,
        marginBottom: 20
    }
  }));

const HomeComponent  = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(6)
    const [charactersList, setCharactersList] = useState([])

    useEffect(() =>{
        retrieveCharacters()
    }, [])

    const retrieveCharacters = _ => {
        setLoading(true)
        axios.get(`${baseUrl}characters?limit=${limit}&offset=0`)
        .then(res => {
            setCharactersList(res.data)
            setLoading(false)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    const updateCharacters = _ => {
        setLimit(limit+6)
        retrieveCharacters()
    }

    return(
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Sort By</h1>
            </div>
            <div className={classes.sort}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button>Name</Button>
                    <Button>Birthday</Button>
                    <Button>Status</Button>
                </ButtonGroup>
            </div>
            <div className={classes.cards}>
                {
                    (loading) ? <h2>Loading...</h2> :
                    charactersList.map((e, i) => ( 
                        <CardComponent 
                            key={i} 
                            img={e.img} 
                            name={e.name} 
                            occupation={e.occupation} 
                            status={e.status} 
                            birthday={e.birthday}
                            portrayer={e.portrayed}
                        />
                    ))
                }
            </div>
            <div className={classes.moreButton}>
                <Button variant="contained" color="primary" onClick={e => updateCharacters() }>
                    Show More
                </Button>
            </div>
        </div>
    )
}

export default HomeComponent