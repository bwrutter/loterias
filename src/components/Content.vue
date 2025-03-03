<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title>Loteria</v-card-title>

    <v-text class="ml-4">Selecione a loteria</v-text>

    <v-combobox
      v-model="selection"
      class="ml-3 mr-3 mt-3"
      label="Loteria"
      :items="['Lotofácil', 'Megasena']"
      variant="solo-filled"
      density="comfortable"
    ></v-combobox>

    <v-text-field
      v-model="qtdSorteios"
      class="ml-3 mr-3"
      label="Quantidade de últimos concursos"
      variant="solo-filled"
      density="comfortable"
      type="number"
      v-tooltip="'Quantidade de sorteios até chegar no atual'"
    ></v-text-field>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Números que mais foram sorteados:</v-card-title>

    <!-- Exibe os números com a frequência -->
    <v-card class="mx-auto" max-width="300">
      <v-list>
        <v-list-item v-for="item in frequenciaNumeros" :key="item.numero">
          <v-list-item-content>
            <v-list-item-title>
              Número {{ item.numero }} : {{ item.vezes }} Vezes
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Buscar"
        block
        border
        @click="reserve"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 'Lotofácil',
    qtdSorteios: 10,
    frequenciaNumeros: [],
  }),

  watch: {
    selection(newValue) {
      console.log(`Loteria selecionada: ${newValue}`);
    }
  },

  methods: {
    reserve () {
      this.loading = true;

      setTimeout(() => {
        this.frequenciaNumeros = [
          { numero: 10, vezes: 35 },
          { numero: 20, vezes: 33 },
          { numero: 11, vezes: 32 },
          { numero: 22, vezes: 30 },
          { numero: 25, vezes: 30 },
          { numero: 6, vezes: 30 },
          { numero: 16, vezes: 29 },
          { numero: 24, vezes: 29 }
        ]
        this.loading = false;
      }, 1000);
    }
  },
};
</script>
