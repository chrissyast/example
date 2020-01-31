<template>
    <div class="hello">
        <div class="input" style="align-items: flex-end">
            <form @submit.prevent="addPerson()">
                <input type="text" placeholder="Enter a name here" v-model="person">
            </form>
                <button v-on:click="calculate" :disabled="this.people.length < 3">Let's buy some gifts!</button>

        </div>
            <p v-if="showValidation">
                That name already exists
            </p>

      <span v-for="(person, index) in people" :key="index">
          {{person}} <img src="../assets/images/delete.png" height="10" width="10" v-on:click="removePerson(index)"/><br>
      </span>
      <br>
      <span v-if="showResults" v-for="(buyer, index) in result" :key="index">
        <b>{{buyer}}</b> will buy for <b>{{result[buyer]}}</b><br>
      </span>


  </div>
</template>

<script>
import API from '../api'
    export default {
        name: "InputSection",
        data() {
            return {
              person: '',
              people: [],
              errors: [],
              result: [],
              showValidation: false,
              showResults: false
            }
        },
        methods: {
            addPerson() {
                this.showValidation = false;
                if (this.person !== '' && !this.people.includes(this.person.toString())){
                    this.people.push(this.person.toString());
                    this.person = '';
                    this.showResults = false;
                }
                if (this.people.includes(this.person.toString())){
                    this.showValidation = true;
                }
            },
            removePerson(index) {
                this.showResults = false
                this.people.splice(index, 1)
            },
            calculate() {
                const body = {"people": this.people};
                API.post("calculation", body)
                    .then(response => {
                        this.result = response.data.result;
                        this.showResults = true
                    })
                    .catch(e => {
                    this.errors.push(e)
                    })
            }
        }
    }


</script>

<style scoped>

</style>