<script>

  import { pokeapi } from "../api/pokeapi";

  export default {
    
    name: 'Home',

    data() {
      return {
        pokemonData: {},
        pokemonID: '',
      }
    },

    methods: {
      async searchPokemon(){
        try {
          const pokemonToFind = await fetch(`${pokeapi}/${this.pokemonID}`)
          const pokemon = await pokemonToFind.json()
          this.pokemonData = pokemon
          console.log(pokemon)
          return pokemon
        } catch (error) {
          this.$router.push('/shutokudekimasendeshita');
        }
      }
    }

  }

</script>

<template>
  
  <div class="header"> 
    <label class="headerLabel">
      <p>ポケモンの名前かIDを入力してください。</p>
      <div>
        <input type="text" v-model="pokemonID">
      </div>
      <div>
        <button class="searchButton" @click="searchPokemon">検索</button>
      </div>
    </label>
  </div>
  
  <div 
    class="main"
    v-if="Object.entries(pokemonData).length > 0"
  >
    <section class="pokemonCard">
      
      <div class="nameImage">
        <h2 id="nameTitle">名前</h2>
        <span class="pokemonName">{{ pokemonData.name.toUpperCase() }}</span>
        <img class="pokemonImage" :src="pokemonData.sprites.front_default" :alt="pokemonData.name">
      </div>
      
      <div class="type">
        <ul class="typeList">
          <h2 id="typeTitle">タイプ</h2>
          <li 
            v-for="(type, index) in pokemonData.types"
            :key="index"
            :class="type.type.name"
          >
            <span>{{ type.type.name.toUpperCase() }}</span>
          </li>
        </ul>
      </div>
      
      <div class="stats">
        <ul class="statsList">
          <h2 id="statsTitle">インフォ</h2>
          <li
            v-for="(stat, index) in pokemonData.stats"
            :key="index"
          >
            <span 
            v-if=" stat.stat.name != 'special-attack' 
            && stat.stat.name != 'special-defense' "
            >
            {{ stat.stat.name.toUpperCase() }}: {{ stat.base_stat }}
            </span> 
          </li>
        </ul>
      </div>
      
    </section>

  </div>

</template>

<style>
  
  ul{
    list-style: none;
  }
   
  .header{
    background-color: rgb(0, 69, 0);
    padding: 30px;
    border-radius: 50px;
    font-size: 20px;
    margin: 20px;
  }

  .headerLabel{
    display: flex;
    flex-direction: column;
  }

  input{
    margin: 10px;
  }

  button{
    margin: 10px;
  }
  
  .pokemonCard{
    display: flex;
    flex-direction: row;
  }

  .nameImage{
    background-color: rgb(3, 112, 3);
    padding: 30px;
    border-radius: 50px;
    margin: 20px;
    display: flex;
    flex-direction: column;
  }

  .typeList{
    background-color: rgb(3, 112, 3);
    padding: 30px;
    border-radius: 50px;
    margin: 20px;
  }

  .statsList{
    background-color: rgb(3, 112, 3);
    padding: 30px;
    border-radius: 50px;
    margin: 20px;
  }

  #statsTitle{
    background-color: rgb(3, 75, 3);
    padding: 30px;
    border-radius: 30px;
  }

  #typeTitle{
    background-color: rgb(3, 75, 3);
    padding: 30px;
    border-radius: 30px;
  }

  #nameTitle{
    background-color: rgb(3, 75, 3);
    padding: 30px;
    border-radius: 30px;
  }

  .pokemonImage{
    width: 200px;
    height: 200px;
  }
  
</style>
