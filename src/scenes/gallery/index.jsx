import React from 'react';
import {Box} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {itemData} from "../../data/mockDataImage";
import Header from "../../components/header/Header";

const Gallery = () => {
    return (
        <Box sx={{
            m: "20px",
        }}>
            <Header title='Welcome to Gallery ' subtitle="Explore Some Beautiful Photos Today"/>
            <ImageList
                cols={3}
                gap={10}

            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>

    );
};

export default Gallery;
