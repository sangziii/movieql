import { getMovie, getMovies, getSuggestions } from './db';
// import { getMovies, getById, addMovie, deleteMovie } from './db';

/* 
resolver 란?
Query를 resove(해결) 한다.
Query는 DB에게는 문제라고 볼 수 있다.
이 Query를 어떤 방식으로 resove(해결)해야 한다.
어떤 사용자가 name Query 를 보내면 반환하는 함수로 답하자

-> Database 로 가서 어떤 걸 관찰하고 리턴한다
3가지 형식 : Query / Mutation / Subscription 
*/

const resolvers = {
    Query: {
        movie: (_, { id }) => getMovie(id),
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        suggestions: (_, { id }) => getSuggestions(id)
    },
    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (__, { id }) => deleteMovie(id)
    // }
};

export default resolvers;
