import React, { Component } from 'react';
import '../css/popular.css';
import api from '../utils/api.js';

class Popular extends Component{
  constructor(){
    super();
    this.state = {
      langSelected : 'All',
      repos: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(lang){
    this.setState({
      langSelected: lang
    })
    api.fetchPopularRepos(lang)
      .then(repos=>{
        this.setState(()=>{
          return {
            repos:repos
          }
        })
      });
  }

  componentDidMount(){
    this.handleClick(this.state.langSelected);
  }

  render(){
    return (
      <div>
        <SelectLanguage
          langSelected ={this.state.langSelected}
          onSelect={this.handleClick}
        />
        {!this.state.repos ?
          <div> LOADING </div> :
        <RepoGrid repos={this.state.repos}/>
        }
      </div>
    )
  }
}

function RepoGrid(props){
  return(
    <ul className='popular-list'>
      {
        props.repos.map((repo,index)=>{
          return (
              <li key={repo.name} className='popular-item'>
              <div className='popular-rank'> #{index+1}</div>
              <ul className='space-list-items'>
              <a href={repo.html_url}>
                <li>
                  <img
                    className='avatar'
                    src={repo.owner.avatar_url}
                    alt={'Avatar for' + repo.owner.login}/>

                </li>
                <li> {repo.name}</li></a>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>

              </ul>
            </li>
          )
        })
      }
    </ul>
  )
}
function SelectLanguage (props){
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
    <ul className='langSelect'>
      {
        languages.map( lang => {
          return <li
            key={lang}
            style={props.langSelected === lang ? {color:'red'}: null}
            onClick={props.onSelect.bind(null,lang)}>
           {lang}
           </li>
        })
      }

    </ul>
)
}

export default Popular;
