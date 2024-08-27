document.addEventListener('DOMContentLoaded', function() {

    const studentAllView = document.getElementById('allStudents');
    const studentDetailModal = new bootstrap.Modal(document.getElementById('detailModal'));
    const studentDetailData = document.getElementById('detail-content');
  
    // API; JSONPlaceholder - for adding students' data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data.forEach(user => {
          const card = document.createElement('div');
          card.className = 'col-md-4 mb-4';
          card.innerHTML = `
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text mb-1">Email: ${user.email}</p>
                <p class="card-text">Phone: ${user.phone}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <button class="btn btn-dark btn-view-detail" onclick='allDetail(${JSON.stringify(user).replace(/'/g, "\\'")})'>View Details</button>
                  <div class="bun-btns">
                    <button class="btn bun-btns-idividual  btn-secondary me-2" onclick='editStudent(${JSON.stringify(user).replace(/'/g, "\\'")})'><i class="bi bi-pencil"></i></button>
                    <button class="btn  bun-btns-idividual btn-danger me-2" onclick='deleteStudent(${JSON.stringify(user).replace(/'/g, "\\'")})'><i class="bi bi-trash"></i></button>
                    <button class="btn  bun-btns-idividual btn-warning" onclick='flagStudent(${JSON.stringify(user).replace(/'/g, "\\'")})'><i class="bi bi-flag"></i></button>
                  </div>
                </div>
              </div>
            </div>
          `;
          studentAllView.appendChild(card);
        });
      });


    // Student bun buttons (CRUD) 
  
    window.allDetail = function(user) {
        studentDetailData.innerHTML = `
        <h5>${user.name}</h5>
        <p class="mb-1">Email: ${user.email}</p>
        <p class="mb-1">Phone: ${user.phone}</p>
        <p class="mb-1">Address: ${user.address.street}, ${user.address.city}</p>
      `;
      studentDetailModal.show();
    };
  
    window.editStudent = function(user) {
      alert(`Editing ${user.name}`);
    };
  
    window.deleteStudent = function(user) {
      alert(`Deleting ${user.name}`);
    };
  
    window.flagStudent = function(user) {
      alert(`Flagging ${user.name}`);
    };
  });
  