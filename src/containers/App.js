import React, { useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { changeSearchField, requestRobots } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.setSearchField.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    hasError: state.requestRobots.hasError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(changeSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

const App = ({robots, onRequestRobots, isPending, hasError, onSearchChange, searchField}) => {

  useEffect(() => {
    return onRequestRobots();
  }, []);


  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  if (isPending) {
    return <div className="loading">Loading...</div>
  }
  if (hasError) {
    return <div className="hasError">there is some error, try again later</div>
  }
  return (
    <div className="App tc">
      <h1>Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);