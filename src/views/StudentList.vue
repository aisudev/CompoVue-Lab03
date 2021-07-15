<template>
  <h1>Student List</h1>
  <div class="events">
    <StudentCard
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentCard from "@/components/StudentCard.vue";
import StudentService from "@/services/StudentService.js";

export default {
  name: "EventList",
  components: {
    StudentCard
  },
  data() {
    return {
      students: null
    };
  },
  created() {
    StudentService.getStudents()
      .then((res) => {
        this.students = res.data;
      })
      .catch((err) => console.log(err));
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
