import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';

export default function AboutDevelopersComponent() {
    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography 
                variant="h3" 
                sx={{ fontWeight: 'bold', mb: 5, color: 'primary.dark', fontSize: 25, color: '#07485B' }}
            >
                ABOUT THE DEVELOPERS
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: 4, maxWidth: 1200, flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            p: 4, 
                            borderRadius: 2, 
                            backgroundColor: '#8EC7D2', 
                            textAlign: 'center', 
                            flex: '1 1 calc(50% - 16px)',
                            minWidth: '300px', 
                            marginBottom: 15,
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Avatar
                                src="https://scontent.fmnl37-1.fna.fbcdn.net/v/t1.6435-9/196397426_4035208919879504_3218622544659063665_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeENJEKt5gthKqqQF_adGraOF_0xffhX_EIX_TF9-Ff8Qlzvyrn0l9hq8w332c0E4qmJ_qgtF9QQyD1_RDOFHIIH&_nc_ohc=Dns1ZAkXPBcQ7kNvgHDcUXG&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=AIJuuFXiVoi1ZNzmFeikvtG&oh=00_AYB5lh8sFgv4Jq5IU2YL6fasrr4c44zgpBTZLju1U0qCMA&oe=6739D9FF"
                                alt="Developer 2 Avatar"
                                sx={{ width: 200, height: 200 }}
                            />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#07485B' }}>
                            Claudine Dela Cruz
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.6, mt: 1, color: 'primary.dark', paddingLeft: 2, paddingRight: 2 }}>
                            I'm excited to start my career in the IT industry. My fascination with technology and its ability to solve real-world problems has drawn me to this field. While I may not have formal IT experience yet, I’m genuinely eager to learn and grow in the tech world.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2, color: 'primary.dark' }}>
                            Location: Malolos, Bulacan
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'primary.dark' }}>
                            Email: claudinesdelacruz@gmail.com
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'primary.dark' }}>
                            Hobby: Traveling, Outdoor activities, and watching sci-fi movies/series
                        </Typography>
                    </Paper>
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            p: 4, 
                            borderRadius: 2, 
                            backgroundColor: '#8EC7D2', 
                            textAlign: 'center', 
                            flex: '1 1 calc(50% - 16px)',
                            minWidth: '300px', 
                            marginBottom: 15
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Avatar
                                src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/278067153_4563739097063970_2095624057890026139_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEv4jFMP0Fyn34hO4kuVd7NOmIdijMsDtw6Yh2KMywO3L_TSgr4SCSrmJ8SJhJ7PVLy6pyPrmfsLq61MIW-y89j&_nc_ohc=bbwWsk2ij0oQ7kNvgGh8Pq2&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=AIOtYaycRoFwaQsGe1ZsLp5&oh=00_AYDizMD_wagx2jC7qaVu4yLADtLJ4E0lGKfbZmdtcKgJxA&oe=67182E8E"
                                alt="Developer 2 Avatar"
                                sx={{ width: 200, height: 200 }}
                            />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#07485B' }}>
                            Ricquela Alayan
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.6, mt: 1, color: 'primary.dark', paddingLeft: 2, paddingRight: 2 }}>
                            I'm an aspiring front-end developer who enjoys designing beautiful and functional web applications. I focus on React.js and have a strong passion for UI/UX design.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2, color: 'primary.dark' }}>
                            Location: Quezon City, Metro Manila
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'primary.dark' }}>
                            Email: rjnevalayan@gmail.com
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'primary.dark' }}>
                            Hobby: Hike and Bike
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}

