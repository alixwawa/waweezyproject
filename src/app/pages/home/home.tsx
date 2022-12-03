

interface HomeProps {
    name: string;
};



export const Home = (props: HomeProps) => {
    
    return (
       <h1>{props.name}</h1>
    );
};

export default Home;