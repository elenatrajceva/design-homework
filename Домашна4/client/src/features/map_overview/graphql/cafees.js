import {useMutation, useQuery,gql} from '@apollo/client';


const LOAD_ALL_CAFES  = gql`
query GetCafes{
    allCafees{
        id
        name
        longitude
        latitude
        vicinity
    }
}
`;

export const useGetCafes = ()=>{

const {loading,data,error} = useQuery(LOAD_ALL_CAFES);

    if(error){
        console.log(error.message);
    }
    return {loading,data};

}