import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cards() {
  return (
    <div>
    <div className='d-flex flex-wrap mt-5'>
      <ul>
      <h1 style={{color:"#253D4E",fontSize:"32px",}}>Featured Categories</h1>
      </ul>
      <ul className='d-flex flex-wrap  align-content-center ms-2 ' style={{listStyle:"none",gap:"20px", fontWeight:"450",color:"#253D4E"}}>
        <li>Cake & Milk</li>
        <li>Coffes & Teas</li>
        <li style={{color:"#3BB77E"}}> Pet Food</li>
        <li>Vegetables</li>
      </ul>
    </div>
    <div className='ms-2 mt-3 d-flex flex-wrap' style={{gap:"25px"}}>
    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#f2fce4"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Cake & Milk
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              26 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#fffceb"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Oganic Kiwi
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              28 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#ecffec"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Peach
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              14 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#feefea"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Red Apple
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              54 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#fff3eb"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Snack
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              56 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#fff3ff"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Vegetables
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              72 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#f2fce4"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Strawberry
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              36 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#feefea"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Black plum
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              123 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"140px",height:"160px",backgroundColor:"#fffceb"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Custard apple
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
              34 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 145 }} style={{width:"120px",height:"160px",backgroundColor:"#feefea"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80px"
          width= "100%"
          image="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-14.png"
          alt="green iguana"
          style={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            Coffe & Tea
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
            89 items
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  )
}

export default Cards