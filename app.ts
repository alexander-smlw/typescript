let info: {
  officeId: number,
  isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
}

const enum QuestionStatus {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted'
}

async function getFaqs(req: { topicId: number, status: QuestionStatus }): Promise<{
  question: string,
  answer: string,
  tags: string[],
  likes: number,
  status: QuestionStatus
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
  
  const data = await res.json();

  return data;
}

