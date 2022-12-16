import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { InputAdornment, TextField } from '@mui/material';
import '../App.css'
import '../index.css'
import { Padding } from '@mui/icons-material';
export default function BasicCard(props:{key:any; name:any;icon:any;acronym:any;movement:any;price:any;tvl:any,frequentlyBrought:any;}) {
  
  const changeColor=(k:any)=>{
    if(k<0) return'red';
    else if(k>0)
    {
       return 'green';
    }
    else return 'red'
  }
  
  return (
    <Card variant="outlined" sx={{marginLeft:'20px',marginRight:'20px',backgroundColor:'#282c34' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
            <img width={50} height={50} src={props.icon}></img>
          </AspectRatio>
          <Typography level="h2" fontSize="md" sx={{ alignSelf: 'center' ,paddingBottom:'20px' }}>
            {props.name} ({props.acronym})
          </Typography>      
      </Box>
      <Box sx={{ display: 'flex' }}>
        <div>      
          <TextField type={'number'} value={props.price} style={{textAlign:'center'}}
          InputProps={{
            style: { color: "white" },
            startAdornment: <InputAdornment position="start" >$</InputAdornment>,
            endAdornment:<InputAdornment position="end" style={{color:changeColor(props.movement)}}>{props.movement>0?`+${props.movement}`:props.movement}%</InputAdornment>,
          }}>
          </TextField>
          <Typography level="body3">Price</Typography>
          <TextField type={'number'} value={props.tvl}
          InputProps={{
            style: { color: "white" },
            startAdornment: <InputAdornment position="start">$</InputAdornment>,   
          }}>
          </TextField>
          <Typography level="body3">TVL</Typography>
          <div style={{display: 'flex'}}>
          {props.frequentlyBrought.map((item:any)=>
          (
            <AspectRatio key={item} minHeight="20px" maxHeight="20px" sx={{ my: 2 }}>
              <img src={item}></img>
            </AspectRatio>
          ))}
          </div>
          <Typography level="body3">Popular pairs</Typography>
        </div>
        
      </Box>
    </Card>
  );
}
