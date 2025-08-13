// Dados simulados
const employees = [
    { id: 1, name: 'João Silva', position: 'Desenvolvedor Pleno', department: 'TI', salary: 5000, status: 'Ativo', hireDate: '2022-03-15' },
    { id: 2, name: 'Maria Souza', position: 'Gerente de Vendas', department: 'Vendas', salary: 8000, status: 'Ativo', hireDate: '2021-01-10' },
    { id: 3, name: 'Carlos Ferreira', position: 'Analista Financeiro Jr', department: 'Financeiro', salary: 4500, status: 'Ativo', hireDate: '2023-05-20' },
    { id: 4, name: 'Ana Costa', position: 'Assistente de RH', department: 'RH', salary: 3500, status: 'Férias', hireDate: '2022-08-01' },
    { id: 5, name: 'Pedro Alves', position: 'Desenvolvedor Sênior', department: 'TI', salary: 9000, status: 'Ativo', hireDate: '2020-02-25' },
    { id: 6, name: 'Fernanda Lima', position: 'Estagiária', department: 'Marketing', salary: 1500, status: 'Ativo', hireDate: '2024-01-12' },
    { id: 7, name: 'Ricardo Santos', position: 'Coordenador de Marketing', department: 'Marketing', salary: 6000, status: 'Ativo', hireDate: '2021-06-30' },
    { id: 8, name: 'Sofia Pereira', position: 'Analista de RH', department: 'RH', salary: 4800, status: 'Licença', hireDate: '2022-11-10' },
    { id: 9, name: 'Lucas Guedes', position: 'Vendedor', department: 'Vendas', salary: 4000, status: 'Ativo', hireDate: '2023-02-18' },
    { id: 10, name: 'Juliana Paiva', position: 'Analista de Marketing', department: 'Marketing', salary: 4200, status: 'Ativo', hireDate: '2023-09-05' },
];

const departments = [
    { id: 1, name: 'TI', manager: 'Pedro Alves', employees: 2, budget: 200000 },
    { id: 2, name: 'Vendas', manager: 'Maria Souza', employees: 2, budget: 150000 },
    { id: 3, name: 'Financeiro', manager: 'Carlos Ferreira', employees: 1, budget: 100000 },
    { id: 4, name: 'RH', manager: 'Sofia Pereira', employees: 2, budget: 80000 },
    { id: 5, name: 'Marketing', manager: 'Ricardo Santos', employees: 3, budget: 120000 },
];

const positions = [
    { id: 1, name: 'Desenvolvedor Pleno', department: 'TI', baseSalary: 5000, employees: 1 },
    { id: 2, name: 'Gerente de Vendas', department: 'Vendas', baseSalary: 8000, employees: 1 },
    { id: 3, name: 'Analista Financeiro Jr', department: 'Financeiro', baseSalary: 4500, employees: 1 },
    { id: 4, name: 'Assistente de RH', department: 'RH', baseSalary: 3500, employees: 1 },
    { id: 5, name: 'Desenvolvedor Sênior', department: 'TI', baseSalary: 9000, employees: 1 },
    { id: 6, name: 'Estagiária', department: 'Marketing', baseSalary: 1500, employees: 1 },
    { id: 7, name: 'Coordenador de Marketing', department: 'Marketing', baseSalary: 6000, employees: 1 },
    { id: 8, name: 'Analista de RH', department: 'RH', baseSalary: 4800, employees: 1 },
    { id: 9, name: 'Vendedor', department: 'Vendas', baseSalary: 4000, employees: 1 },
    { id: 10, name: 'Analista de Marketing', department: 'Marketing', baseSalary: 4200, employees: 1 },
];

const payrolls = [
    { id: 1, employee: 'João Silva', department: 'TI', grossSalary: 5000, discounts: 500, netSalary: 4500, status: 'Pago' },
    { id: 2, employee: 'Maria Souza', department: 'Vendas', grossSalary: 8000, discounts: 800, netSalary: 7200, status: 'Pago' },
    { id: 3, employee: 'Carlos Ferreira', department: 'Financeiro', grossSalary: 4500, discounts: 450, netSalary: 4050, status: 'Pendente' },
];

let employeesTablePage = 1;
const employeesPerPage = 10;
let departmentsTablePage = 1;
const departmentsPerPage = 10;
let positionsTablePage = 1;
const positionsPerPage = 10;
let payrollTablePage = 1;
const payrollPerPage = 10;

// Elementos do DOM
const loadingOverlay = document.getElementById('loadingOverlay');
const sidebar = document.querySelector('.sidebar');
const toggleSidebarBtn = document.getElementById('toggleSidebar');
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('pageTitle');
const sections = document.querySelectorAll('.section-content');

// Dashboard
const totalEmployeesEl = document.getElementById('totalEmployees');
const totalDepartmentsEl = document.getElementById('totalDepartments');
const totalPayrollEl = document.getElementById('totalPayroll');
const newHiresEl = document.getElementById('newHires');
const recentHiresTableBody = document.getElementById('recentHiresTable');

// Employees
const employeesTableBody = document.getElementById('employeesTable');
const employeeSearchInput = document.getElementById('employeeSearch');
const employeeFilterDeptSelect = document.getElementById('employeeFilterDept');
const employeeFilterStatusSelect = document.getElementById('employeeFilterStatus');
const employeeStartEl = document.getElementById('employeeStart');
const employeeEndEl = document.getElementById('employeeEnd');
const employeeTotalEl = document.getElementById('employeeTotal');
const employeePrevBtn = document.getElementById('employeePrev');
const employeeNextBtn = document.getElementById('employeeNext');
const addEmployeeBtn = document.getElementById('addEmployeeBtn');
const addEmployeeModal = document.getElementById('addEmployeeModal');
const closeEmployeeModalBtn = document.getElementById('closeEmployeeModal');
const addEmployeeForm = document.getElementById('addEmployeeForm');
const employeePositionSelect = document.getElementById('employeePosition');
const employeeDeptSelect = document.getElementById('employeeDept');

// Departments
const departmentsTableBody = document.getElementById('departmentsTable');
const departmentSearchInput = document.getElementById('departmentSearch');
const departmentStartEl = document.getElementById('departmentStart');
const departmentEndEl = document.getElementById('departmentEnd');
const departmentTotalEl = document.getElementById('departmentTotal');
const departmentPrevBtn = document.getElementById('departmentPrev');
const departmentNextBtn = document.getElementById('departmentNext');
const addDepartmentBtn = document.getElementById('addDepartmentBtn');
const addDepartmentModal = document.getElementById('addDepartmentModal');
const closeDepartmentModalBtn = document.getElementById('closeDepartmentModal');
const addDepartmentForm = document.getElementById('addDepartmentForm');

// Positions
const positionsTableBody = document.getElementById('positionsTable');
const positionSearchInput = document.getElementById('positionSearch');
const positionFilterDeptSelect = document.getElementById('positionFilterDept');
const positionStartEl = document.getElementById('positionStart');
const positionEndEl = document.getElementById('positionEnd');
const positionTotalEl = document.getElementById('positionTotal');
const positionPrevBtn = document.getElementById('positionPrev');
const positionNextBtn = document.getElementById('positionNext');
const addPositionBtn = document.getElementById('addPositionBtn');
const addPositionModal = document.getElementById('addPositionModal');
const closePositionModalBtn = document.getElementById('closePositionModal');
const addPositionForm = document.getElementById('addPositionForm');
const positionDeptSelect = document.getElementById('positionDept');

// Payroll
const payrollTableBody = document.getElementById('payrollTable');
const payrollMonthSelect = document.getElementById('payrollMonth');
const payrollYearSelect = document.getElementById('payrollYear');
const payrollStartEl = document.getElementById('payrollStart');
const payrollEndEl = document.getElementById('payrollEnd');
const payrollTotalEl = document.getElementById('payrollTotal');
const payrollPrevBtn = document.getElementById('payrollPrev');
const payrollNextBtn = document.getElementById('payrollNext');


// Funções de inicialização
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
        renderDashboard();
        renderEmployeesTable();
        renderDepartmentsTable();
        renderPositionsTable();
        renderPayrollTable();
        populateFilterDropdowns();
    }, 1500); // Simula um tempo de carregamento
});

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('ml-64');
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        const sectionName = item.getAttribute('data-section');
        showSection(sectionName);
    });
});

document.querySelectorAll('[data-section-link]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionName = link.getAttribute('data-section-link');
        navItems.forEach(nav => nav.classList.remove('active'));
        const targetNavItem = document.querySelector(`.nav-item[data-section="${sectionName}"]`);
        if (targetNavItem) {
            targetNavItem.classList.add('active');
        }
        showSection(sectionName);
    });
});

function showSection(sectionName) {
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(`${sectionName}Section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        pageTitle.textContent = targetSection.querySelector('h2') ? targetSection.querySelector('h2').textContent : 'Dashboard';
        
        // Renderiza o conteúdo dinâmico da seção
        if (sectionName === 'employees') renderEmployeesTable();
        if (sectionName === 'departments') renderDepartmentsTable();
        if (sectionName === 'positions') renderPositionsTable();
        if (sectionName === 'payroll') renderPayrollTable();
    }
}

// Lógica do Dashboard
function renderDashboard() {
    totalEmployeesEl.textContent = employees.length;
    totalDepartmentsEl.textContent = departments.length;
    
    const totalPayroll = employees.reduce((sum, emp) => sum + emp.salary, 0);
    totalPayrollEl.textContent = totalPayroll.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '').trim();
    
    const newHiresCount = employees.filter(emp => {
        const hireDate = new Date(emp.hireDate);
        const today = new Date();
        const thirtyDaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
        return hireDate >= thirtyDaysAgo;
    }).length;
    newHiresEl.textContent = newHiresCount;

    // Tabela de Últimas Contratações
    const recentHires = employees.sort((a, b) => new Date(b.hireDate) - new Date(a.hireDate)).slice(0, 5);
    recentHiresTableBody.innerHTML = '';
    recentHires.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${emp.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${emp.position}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${emp.department}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${new Date(emp.hireDate).toLocaleDateString('pt-BR')}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${emp.status}</span>
            </td>
        `;
        recentHiresTableBody.appendChild(row);
    });

    // Gráficos
    renderDepartmentChart();
    renderPositionChart();
}

let departmentChart;
function renderDepartmentChart() {
    if (departmentChart) departmentChart.destroy();
    const ctx = document.getElementById('departmentChart').getContext('2d');
    const departmentCounts = employees.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
    }, {});
    const labels = Object.keys(departmentCounts);
    const data = Object.values(departmentCounts);
    departmentChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Funcionários',
                data: data,
                backgroundColor: [
                    '#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'
                ],
                hoverOffset: 4
            }]
        }
    });
}

let positionChart;
function renderPositionChart() {
    if (positionChart) positionChart.destroy();
    const ctx = document.getElementById('positionChart').getContext('2d');
    const positionCounts = employees.reduce((acc, emp) => {
        acc[emp.position] = (acc[emp.position] || 0) + 1;
        return acc;
    }, {});
    const labels = Object.keys(positionCounts);
    const data = Object.values(positionCounts);
    positionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Funcionários',
                data: data,
                backgroundColor: '#3b82f6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Funções de renderização de tabelas
function renderEmployeesTable(page = employeesTablePage, query = '', dept = '', status = '') {
    const start = (page - 1) * employeesPerPage;
    const end = start + employeesPerPage;
    
    let filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(query.toLowerCase()) &&
        (dept === '' || emp.department === dept) &&
        (status === '' || emp.status === status)
    );
    
    const paginatedEmployees = filteredEmployees.slice(start, end);
    employeesTableBody.innerHTML = '';
    
    paginatedEmployees.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${emp.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${emp.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${emp.position}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${emp.department}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ ${emp.salary.toFixed(2).replace('.', ',')}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${emp.status === 'Ativo' ? 'bg-green-100 text-green-800' :
                    emp.status === 'Férias' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}"
                >${emp.status}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mx-1" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="text-red-600 hover:text-red-900 mx-1" title="Excluir"><i class="fas fa-trash"></i></button>
            </td>
        `;
        employeesTableBody.appendChild(row);
    });
    
    updatePaginationControls(
        filteredEmployees.length,
        employeesPerPage,
        page,
        employeesTablePage,
        employeeStartEl,
        employeeEndEl,
        employeeTotalEl,
        employeePrevBtn,
        employeeNextBtn
    );
}

function renderDepartmentsTable(page = departmentsTablePage, query = '') {
    const start = (page - 1) * departmentsPerPage;
    const end = start + departmentsPerPage;
    
    let filteredDepartments = departments.filter(dept => 
        dept.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const paginatedDepartments = filteredDepartments.slice(start, end);
    departmentsTableBody.innerHTML = '';

    paginatedDepartments.forEach(dept => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${dept.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${dept.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${dept.manager}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${dept.employees}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ ${dept.budget.toFixed(2).replace('.', ',')}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mx-1" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="text-red-600 hover:text-red-900 mx-1" title="Excluir"><i class="fas fa-trash"></i></button>
            </td>
        `;
        departmentsTableBody.appendChild(row);
    });

    updatePaginationControls(
        filteredDepartments.length,
        departmentsPerPage,
        page,
        departmentsTablePage,
        departmentStartEl,
        departmentEndEl,
        departmentTotalEl,
        departmentPrevBtn,
        departmentNextBtn
    );
}

function renderPositionsTable(page = positionsTablePage, query = '', dept = '') {
    const start = (page - 1) * positionsPerPage;
    const end = start + positionsPerPage;
    
    let filteredPositions = positions.filter(pos =>
        pos.name.toLowerCase().includes(query.toLowerCase()) &&
        (dept === '' || pos.department === dept)
    );

    const paginatedPositions = filteredPositions.slice(start, end);
    positionsTableBody.innerHTML = '';
    
    paginatedPositions.forEach(pos => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${pos.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${pos.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${pos.department}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ ${pos.baseSalary.toFixed(2).replace('.', ',')}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${pos.employees}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mx-1" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="text-red-600 hover:text-red-900 mx-1" title="Excluir"><i class="fas fa-trash"></i></button>
            </td>
        `;
        positionsTableBody.appendChild(row);
    });

    updatePaginationControls(
        filteredPositions.length,
        positionsPerPage,
        page,
        positionsTablePage,
        positionStartEl,
        positionEndEl,
        positionTotalEl,
        positionPrevBtn,
        positionNextBtn
    );
}

function renderPayrollTable(page = payrollTablePage) {
    const start = (page - 1) * payrollPerPage;
    const end = start + payrollPerPage;
    const paginatedPayroll = payrolls.slice(start, end);
    payrollTableBody.innerHTML = '';
    
    paginatedPayroll.forEach(p => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${p.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${p.employee}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${p.department}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ ${p.grossSalary.toFixed(2).replace('.', ',')}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ ${p.discounts.toFixed(2).replace('.', ',')}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ ${p.netSalary.toFixed(2).replace('.', ',')}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${p.status === 'Pago' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}"
                >${p.status}</span>
            </td>
        `;
        payrollTableBody.appendChild(row);
    });

    updatePaginationControls(
        payrolls.length,
        payrollPerPage,
        page,
        payrollTablePage,
        payrollStartEl,
        payrollEndEl,
        payrollTotalEl,
        payrollPrevBtn,
        payrollNextBtn
    );
}

function updatePaginationControls(totalItems, itemsPerPage, currentPage, pageVar, startEl, endEl, totalEl, prevBtn, nextBtn) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    startEl.textContent = Math.min((currentPage - 1) * itemsPerPage + 1, totalItems);
    endEl.textContent = Math.min(currentPage * itemsPerPage, totalItems);
    totalEl.textContent = totalItems;
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalItems === 0;

    prevBtn.onclick = () => {
        if (pageVar > 1) {
            pageVar--;
            if (pageVar === employeesTablePage) renderEmployeesTable();
            if (pageVar === departmentsTablePage) renderDepartmentsTable();
            if (pageVar === positionsTablePage) renderPositionsTable();
            if (pageVar === payrollTablePage) renderPayrollTable();
        }
    };
    nextBtn.onclick = () => {
        if (pageVar < totalPages) {
            pageVar++;
            if (pageVar === employeesTablePage) renderEmployeesTable();
            if (pageVar === departmentsTablePage) renderDepartmentsTable();
            if (pageVar === positionsTablePage) renderPositionsTable();
            if (pageVar === payrollTablePage) renderPayrollTable();
        }
    };
}


// Funções de filtros e busca
function populateFilterDropdowns() {
    const uniqueDepartments = [...new Set(departments.map(d => d.name))];
    uniqueDepartments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        employeeFilterDeptSelect.appendChild(option);
        positionFilterDeptSelect.appendChild(option.cloneNode(true));
        employeeDeptSelect.appendChild(option.cloneNode(true));
        positionDeptSelect.appendChild(option.cloneNode(true));
    });

    const uniquePositions = [...new Set(positions.map(p => p.name))];
    uniquePositions.forEach(pos => {
        const option = document.createElement('option');
        option.value = pos;
        option.textContent = pos;
        employeePositionSelect.appendChild(option);
    });
}

employeeSearchInput.addEventListener('input', () => {
    employeesTablePage = 1;
    renderEmployeesTable(1, employeeSearchInput.value, employeeFilterDeptSelect.value, employeeFilterStatusSelect.value);
});
employeeFilterDeptSelect.addEventListener('change', () => {
    employeesTablePage = 1;
    renderEmployeesTable(1, employeeSearchInput.value, employeeFilterDeptSelect.value, employeeFilterStatusSelect.value);
});
employeeFilterStatusSelect.addEventListener('change', () => {
    employeesTablePage = 1;
    renderEmployeesTable(1, employeeSearchInput.value, employeeFilterDeptSelect.value, employeeFilterStatusSelect.value);
});

departmentSearchInput.addEventListener('input', () => {
    departmentsTablePage = 1;
    renderDepartmentsTable(1, departmentSearchInput.value);
});

positionSearchInput.addEventListener('input', () => {
    positionsTablePage = 1;
    renderPositionsTable(1, positionSearchInput.value, positionFilterDeptSelect.value);
});
positionFilterDeptSelect.addEventListener('change', () => {
    positionsTablePage = 1;
    renderPositionsTable(1, positionSearchInput.value, positionFilterDeptSelect.value);
});

// Funções de Modals
addEmployeeBtn.addEventListener('click', () => {
    addEmployeeModal.classList.remove('hidden');
});
closeEmployeeModalBtn.addEventListener('click', () => {
    addEmployeeModal.classList.add('hidden');
    addEmployeeForm.reset();
});
addEmployeeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newEmployee = {
        id: employees.length + 1,
        name: document.getElementById('employeeName').value,
        position: document.getElementById('employeePosition').value,
        department: document.getElementById('employeeDept').value,
        salary: parseFloat(document.getElementById('employeeSalary').value),
        status: 'Ativo',
        hireDate: new Date().toISOString().slice(0, 10)
    };
    employees.push(newEmployee);
    addEmployeeModal.classList.add('hidden');
    addEmployeeForm.reset();
    renderEmployeesTable();
    renderDashboard();
});

addDepartmentBtn.addEventListener('click', () => {
    addDepartmentModal.classList.remove('hidden');
});
closeDepartmentModalBtn.addEventListener('click', () => {
    addDepartmentModal.classList.add('hidden');
    addDepartmentForm.reset();
});
addDepartmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newDept = {
        id: departments.length + 1,
        name: document.getElementById('departmentName').value,
        manager: document.getElementById('departmentManager').value,
        employees: 0,
        budget: 0
    };
    departments.push(newDept);
    addDepartmentModal.classList.add('hidden');
    addDepartmentForm.reset();
    renderDepartmentsTable();
    renderDashboard();
});

addPositionBtn.addEventListener('click', () => {
    addPositionModal.classList.remove('hidden');
});
closePositionModalBtn.addEventListener('click', () => {
    addPositionModal.classList.add('hidden');
    addPositionForm.reset();
});
addPositionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPos = {
        id: positions.length + 1,
        name: document.getElementById('positionName').value,
        department: document.getElementById('positionDept').value,
        baseSalary: parseFloat(document.getElementById('positionSalary').value),
        employees: 0
    };
    positions.push(newPos);
    addPositionModal.classList.add('hidden');
    addPositionForm.reset();
    renderPositionsTable();
    renderDashboard();
});
