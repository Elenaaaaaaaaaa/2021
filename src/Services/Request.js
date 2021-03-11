const Request = {
     SERVER : 'http://localhost:8080',
    getStudents() {
        return fetch(this.SERVER + "/student/all").then(res => res.json());
    },
    getJournal() {
        return fetch(this.SERVER+"/journal/all").then(res => res.json());
    }
};
export default Request