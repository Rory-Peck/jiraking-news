const stories = [
  { topic: 'Technology', title: 'Small teams are building the future at full speed', summary: 'Why the most interesting innovation is happening far from the usual places.', time: 'Today · 6 min read' },
  { topic: 'Culture', title: 'The return of the considered life', summary: 'A growing creative movement is choosing depth over constant discovery.', time: 'Today · 4 min read' },
  { topic: 'Business', title: 'What resilient companies know about change', summary: 'The new playbook for making smart decisions when the map keeps moving.', time: 'Yesterday · 8 min read' },
  { topic: 'World', title: 'A new generation of global citizens', summary: 'The communities turning local action into a worldwide conversation.', time: 'Yesterday · 5 min read' },
  { topic: 'Technology', title: 'Designing technology people can trust', summary: 'The principles behind products that feel useful, human, and lasting.', time: '2 days ago · 7 min read' },
  { topic: 'Culture', title: 'The places where new ideas take root', summary: 'From studios to shared kitchens, a field guide to creative energy.', time: '2 days ago · 3 min read' },
];

const storiesElement = document.querySelector('#stories');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#search');
let selectedTopic = 'All';

function renderStories() {
  const query = searchInput.value.toLowerCase().trim();
  const visibleStories = stories.filter((story) => {
    const matchesTopic = selectedTopic === 'All' || story.topic === selectedTopic;
    const matchesSearch = `${story.title} ${story.summary} ${story.topic}`.toLowerCase().includes(query);
    return matchesTopic && matchesSearch;
  });

  storiesElement.innerHTML = visibleStories.map((story) => `
    <article class="story">
      <span class="story-topic">${story.topic}</span>
      <h3>${story.title}</h3>
      <p>${story.summary}</p>
      <span class="story-meta">${story.time} <span aria-hidden="true">↗</span></span>
    </article>
  `).join('');
  emptyState.hidden = visibleStories.length > 0;
}

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    selectedTopic = button.dataset.topic;
    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');
    renderStories();
  });
});
searchInput.addEventListener('input', renderStories);
document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-message').textContent = 'Thanks — your first briefing is on its way.';
  event.currentTarget.reset();
});
renderStories();
