
 const projectId = 'hardy-unison-268916';
 const location = 'us-central1';
 const modelId = 'ICN6313813581108346880';
 const filePath = "C:\\Users\\Supun\\Desktop\\images.jpg";

 const express = require('express')
 const bodyParser = require('body-parser')
 const cors = require('cors')
 const port = 8060
  const app = express()
  const fs = require(`fs`);
  const multer = require('multer')
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length-1])
    }
  })
   
  var upload = multer({ storage: storage })
  app.use(cors());
  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({}));

  app.listen(port, function(){
    console.log('Snake Machine Running on port ' + port)
  })

// Imports the Google Cloud AutoML library
const {PredictionServiceClient} = require(`@google-cloud/automl`).v1;
const {AutoMlClient} = require(`@google-cloud/automl`).v1;


const clientE = new AutoMlClient({
  // optional auth parameters.
});

// Instantiates a client
const client = new PredictionServiceClient();



async function predict(res, file) {
  // Construct request
  // params is additional domain-specific parameters.
  // score_threshold is used to filter the result
  // Read the file content for translation.
  const content = fs.readFileSync('public/uploads/' + file);
  const request = {
    name: client.modelPath(projectId, location, modelId),
    payload: {
      image: {
        imageBytes: content,
      },
    },
  };

  const [response] = await client.predict(request);


var tosend = [];
  for (const annotationPayload of response.payload) {
    tosend.push(annotationPayload)
  }
  console.log(tosend)
  res.jsonp(tosend[0])
}

async function listModelEvaluations(res) {
  // Construct request
  const request = {
    parent: clientE.modelPath(projectId, location, modelId),
    filter: '',
  };

  const [response] = await clientE.listModelEvaluations(request);

  console.log(`List of model evaluations:`);
  for (const evaluation of response) {
    console.log(`Model evaluation name: ${evaluation.name}`);
    console.log(`Model annotation spec id: ${evaluation.annotationSpecId}`);
    console.log(`Model display name: ${evaluation.displayName}`);
    console.log(`Model create time`);
    console.log(`\tseconds ${evaluation.createTime.seconds}`);
    console.log(`\tnanos ${evaluation.createTime.nanos / 1e9}`);
    console.log(
      `Evaluation example count: ${evaluation.evaluatedExampleCount}`
    );
    console.log(
      `Classification model evaluation metrics: ${evaluation.classificationEvaluationMetrics}`
    );
  }
  res.send(response)
}

app.get('/predict', function(req, res){
  console.log('A request')
  var file = req.query.file
  predict(res, file).catch(function(err){
    console.log(err)
    res.send(err)
  })
});

app.get('/eval', function(req, res){
  console.log('A request to eval')
  listModelEvaluations(res);
});

app.post('/publicUpload', upload.single('file'), (req, res, next) => {
  const file = req.file
  console.log(file)
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
})

