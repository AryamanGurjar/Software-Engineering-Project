const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  events.forEach(event => {
    element.addEventListener(event, listener, false);
  });
};

const fileUpload = () => {
  const INPUT_FILE = document.querySelector('#upload-files');
  const INPUT_CONTAINER = document.querySelector('#upload-container');
  const FILES_LIST_CONTAINER = document.querySelector('#files-list-container');
  const FILE_LIST = [];

  multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
    INPUT_CONTAINER.classList.add('active');
  });

  multipleEvents(INPUT_FILE, 'dragleave dragend drop change', () => {
    INPUT_CONTAINER.classList.remove('active');
  });

  INPUT_FILE.addEventListener('change', () => {
    const files = [...INPUT_FILE.files];

    files.forEach(file => {
      const fileURL = URL.createObjectURL(file);
      const fileName = file.name;
      const uploadedFiles = {
        name: fileName,
        url: fileURL };


      FILE_LIST.push(uploadedFiles);
    });

    FILES_LIST_CONTAINER.innerHTML = '';
    FILE_LIST.forEach(addedFile => {
      const content = `
          <div class="form__files-container">
            <span class="form__text">${addedFile.name}</span>
            <div>
              <a class="form__icon" href="${addedFile.url}" target="_blank" title="Preview">&#128065;</a>
              <a class="form__icon" href="${addedFile.url}" title="Download" download>&#11123;</a>
            </div>
          </div>
        `;

      FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
    });
  });
};

fileUpload();