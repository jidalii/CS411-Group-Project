import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./profile.css";

interface User {
    username: string,
    email: string,
    avatar: string
}
//5 top artists
interface Artist {
    id: string,
    name: string,
    image: string,
    song: string[],//3 songs
    type:string
}

function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    //const [artist, setArtist] = useState<Artist[] | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/auth/user-data', { withCredentials: true });
                setUser(response.data);
                console.log(response.data);

                //const response_artist = await axios.get('http://localhost:8000/spotify/v0/top3-artist', { withCredentials: true }); 
                //setArtist(response_artist.data);
                //console.log(response_artist.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    // const [userAndArtist, setUserAndArtist] = useState<[User | null, Artist | null] | null>(null);
    // const [user, artist] = userAndArtist || [null, null];
    
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const responseUser = await axios.get('http://localhost:8000/auth/user-data', { withCredentials: true });
    //             const responseArtist = await axios.get('http://localhost:8000/spotify/v0/top3-artist', { withCredentials: true });
                
    //             console.log("ProfilePage:");
    //             console.log(responseUser.data);
    //             console.log(responseArtist.data);
    //             setUserAndArtist([responseUser.data, responseArtist.data]);
    //         } catch (error) {
    //             setUserAndArtist([null, null]); // or handle the error in another way
    //             console.error('Error fetching data:', error);
    //         }
    //   };
    
    //     fetchUserData();
    // }, []);

    return (
        <div>

            {user && (
                <body>
                    <header>
                        <div className="profile-header">
                            <div className="user-info">
                                <h2 className='text-2xl'>
                                    Hi! This is
                                </h2>
                                <h3 className='text-8xl profile-name'>
                                    {user.username}
                                </h3>
                                {/*<p className='text-2xl'>
                                    Email: {user.email} 
                                    \</p>*/}
                            </div >
                            
                            <div className="pic">
                                <img src={user.avatar} alt="No Profile Image"/>
                                {/* {AvatarShow(user.avatar)} */}
                            </div>
                        </div>
                    </header>
                    
                        <div className="music-preferences">
                            <h3>Favorite Genres</h3>
                                {/*<ul>
                                    {user.favoriteGenres.map((genre) => (
                                        <li key={genre}>{genre}</li>
                                    ))}
                                    </ul>
                                    {/* Add create/edit/delete playlist functionality */}
                        </div>
                        <div className="playlists">
                            <h3>User's Playlists</h3>
                            {/*<ul>
                            {user.playlists.map((playlist) => (
                                <li key={playlist.id}>{playlist.name}</li>
                            ))}
                            </ul>
                            {/* Add create/edit/delete playlist functionality */} 
                        </div>

                        {/*artist && (
                            <div>
                            <h3>Top Artists</h3>
                            <ul>
                                {artist.map((artist) => (
                                <li key={artist.id}>
                                    <p>Name: {artist.name}</p>
                                    <p>Type: {artist.type}</p>
                                    <p>Songs: {artist.song.join(', ')}</p>
                                    <img src={artist.image} alt={artist.name} />
                                </li>
                                ))}
                            </ul>
                            </div>
                        )*/}
    
                </body>

                )}
        
        </div>
    );
}


export default ProfilePage;
