import { Container } from 'react-bootstrap';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Container style={{minHeight:'75vh'}}>
        부트스트랩 적용해서 조금 더 깔끔한 UI 만들기
      </Container>
    </Layout>
  );
}

export default App;