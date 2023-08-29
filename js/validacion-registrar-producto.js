const form = document.getElementById('registro-item');
const nombreItem = document.getElementById('idNombreItem');
const precioItemm = document.getElementById('idPrecioItem');
const imagenItemm = document.getElementById('idImagenItem');
const descripcionItemm = document.getElementById('idDescripcionItem');

const soMin = document.getElementById('ReqSOMin');
const cpuMin = document.getElementById('ReqProceMin');
const ramMin = document.getElementById('ReqRAMMin');
const gpuMin = document.getElementById('ReqGPUMin');
const dxMin = document.getElementById('ReqDXMin');
const diskMin = document.getElementById('ReqDiskMin');

const soRec = document.getElementById('ReqSORec');
const cpuRec = document.getElementById('ReqProceRec');
const ramRec = document.getElementById('ReqRAMRec');
const gpuRec = document.getElementById('ReqGPURec');
const dxRec = document.getElementById('ReqDXRec');
const diskRec = document.getElementById('ReqDiskRec');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    document.getElementById('nombre-item-error').innerHTML = '';
    document.getElementById('precio-item-error').innerHTML = '';
    document.getElementById('imagen-item-error').innerHTML = '';
    document.getElementById('descripcion-item-error').innerHTML = '';

    document.getElementById('req-so-min-error').innerHTML = '';
    document.getElementById('req-proce-min-error').innerHTML = '';
    document.getElementById('req-ram-min-error').innerHTML = '';
    document.getElementById('req-gpu-min-error').innerHTML = '';
    document.getElementById('req-dx-min-error').innerHTML = '';
    document.getElementById('req-disk-min-error').innerHTML = '';

    document.getElementById('req-so-rec-error').innerHTML = '';
    document.getElementById('req-proce-rec-error').innerHTML = '';
    document.getElementById('req-ram-rec-error').innerHTML = '';
    document.getElementById('req-gpu-rec-error').innerHTML = '';
    document.getElementById('req-dx-rec-error').innerHTML = '';
    document.getElementById('req-disk-rec-error').innerHTML = '';

    if (nombreItem.value === '') {
        document.getElementById('nombre-item-error').innerHTML = 'Por favor ingrese el nombre del producto';
        return;
    }
    if (precioItemm.value === '') {
        document.getElementById('precio-item-error').innerHTML = 'Por favor ingrese el precio del producto';
        return;
    }
    if (imagenItemm.value === '') {
        document.getElementById('imagen-item-error').innerHTML = 'Por favor ingrese la imagen del producto';
        return;
    }
    if (descripcionItemm.value === '') {
        document.getElementById('descripcion-item-error').innerHTML = 'Por favor ingrese la descripción del producto';
        return;
    }


    if (soMin.value === '') {
        document.getElementById('req-so-min-error').innerHTML = 'Por favor ingrese sistema operativo';
        return;
    }
    if (cpuMin.value === '') {
        document.getElementById('req-proce-min-error').innerHTML = 'Por favor ingrese procesador';
        return;
    }
    if (ramMin.value === '') {
        document.getElementById('req-ram-min-error').innerHTML = 'Por favor ingrese RAM';
        return;
    }
    if (gpuMin.value === '') {
        document.getElementById('req-gpu-min-error').innerHTML = 'Por favor ingrese GPU';
        return;
    }
    if (dxMin.value === '') {
        document.getElementById('req-dx-min-error').innerHTML = 'Por favor ingrese versión DirectX';
        return;
    }
    if (diskMin.value === '') {
        document.getElementById('req-disk-min-error').innerHTML = 'Por favor ingrese espacio de almacenamiento';
        return;
    }


    if (soRec.value === '') {
        document.getElementById('req-so-rec-error').innerHTML = 'Por favor ingrese sistema operativo';
        return;
    }
    if (cpuRec.value === '') {
        document.getElementById('req-proce-rec-error').innerHTML = 'Por favor ingrese procesador';
        return;
    }
    if (ramRec.value === '') {
        document.getElementById('req-ram-rec-error').innerHTML = 'Por favor ingrese RAM';
        return;
    }
    if (gpuRec.value === '') {
        document.getElementById('req-gpu-rec-error').innerHTML = 'Por favor ingrese GPU';
        return;
    }
    if (dxRec.value === '') {
        document.getElementById('req-dx-rec-error').innerHTML = 'Por favor ingrese versión DirectX';
        return;
    }
    if (diskRec.value === '') {
        document.getElementById('req-disk-rec-error').innerHTML = 'Por favor ingrese espacio de almacenamiento';
        return;
    }

    alert('registro-item');

    form.submit();
})
