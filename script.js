const clubsData = [
      {
        id: "coding-club",
        name: "Coding & Hackers Club",
        category: "Technical",
        members: 140,
        shortDesc: "Competitive programming, full-stack web development, hackathons, and open-source sprints.",
        fullDesc: "The Coding & Hackers Club is a student-run technical community dedicated to software engineering, algorithmic problem-solving, and annual campus hackathons. Weekly peer-learning sessions help beginners and advanced coders build real-world projects.",
        leads: [
          { name: "Rohan Verma", role: "President", email: "rohan.coding@college.edu", phone: "+91 98765 43210" },
          { name: "Sneha Nair", role: "Technical Lead", email: "sneha.coding@college.edu", phone: "+91 98765 43211" }
        ],
        socials: { GitHub: "https://github.com", LinkedIn: "https://linkedin.com", Instagram: "https://instagram.com" }
      },
      {
        id: "robotics-club",
        name: "Robotics & Automation Society",
        category: "Technical",
        members: 95,
        shortDesc: "Design autonomous bots, drones, Arduino/ROS systems, and compete in national RoboWars.",
        fullDesc: "Our Robotics Society brings together hardware enthusiasts, embedded systems programmers, and mechanical designers. We provide lab access, microcontroller kits, and mentorship for national robotics competitions.",
        leads: [
          { name: "Aditya Kulkarni", role: "Club Coordinator", email: "aditya.robotics@college.edu", phone: "+91 98765 43212" }
        ],
        socials: { GitHub: "https://github.com", LinkedIn: "https://linkedin.com", Instagram: "https://instagram.com" }
      },
      {
        id: "drama-club",
        name: "Navrang Drama & Theatre Club",
        category: "Cultural",
        members: 82,
        shortDesc: "Stage plays, street theatre (Nukkad Natak), scriptwriting, and expressive acting workshops.",
        fullDesc: "Navrang is the official dramatics society of the college. From socially conscious street plays to grand auditorium productions, we train students in voice modulation, improvisation, stagecraft, and direction.",
        leads: [
          { name: "Meera Joshi", role: "Cultural Secretary", email: "meera.drama@college.edu", phone: "+91 98765 43213" }
        ],
        socials: { Instagram: "https://instagram.com", YouTube: "https://youtube.com" }
      },
      {
        id: "music-club",
        name: "Octaves Music Society",
        category: "Cultural",
        members: 110,
        shortDesc: "Classical & western vocals, battle of bands, acoustic jam sessions, and audio production.",
        fullDesc: "Octaves unites vocalists, instrumentalists, and music producers across campus. We host open-mic nights, cultural fest concerts, and studio recording workshops.",
        leads: [
          { name: "Kabir Sen", role: "Band Lead", email: "kabir.music@college.edu", phone: "+91 98765 43214" }
        ],
        socials: { Instagram: "https://instagram.com", YouTube: "https://youtube.com" }
      },
      {
        id: "literary-club",
        name: "Orators & Literary Society",
        category: "Literary",
        members: 74,
        shortDesc: "Parliamentary debates, Model UN (MUN), poetry slams, creative writing, and campus magazine.",
        fullDesc: "The Literary Society fosters critical thinking, public speaking, and creative expression. Join us for British Parliamentary debates, poetry circles, and editorial workshops.",
        leads: [
          { name: "Ananya Rao", role: "Editor-in-Chief", email: "ananya.lit@college.edu", phone: "+91 98765 43215" }
        ],
        socials: { LinkedIn: "https://linkedin.com", Instagram: "https://instagram.com" }
      },
      {
        id: "sports-club",
        name: "Titans Campus Sports Club",
        category: "Sports",
        members: 180,
        shortDesc: "Inter-college football, basketball, cricket, badminton tournaments, and fitness camps.",
        fullDesc: "Titans Sports Club manages campus athletic teams, intramural leagues, and fitness workshops. Whether you are a competitive athlete or looking to stay active, we have daily training slots.",
        leads: [
          { name: "Vikramjeet Singh", role: "Sports Captain", email: "vikram.sports@college.edu", phone: "+91 98765 43216" }
        ],
        socials: { Instagram: "https://instagram.com" }
      }
    ];

    const workshopsData = [
      {
        id: "ws-101",
        clubId: "coding-club",
        clubName: "Coding & Hackers Club",
        category: "Technical",
        title: "Full-Stack Web Development Bootcamp",
        day: "12",
        month: "OCT",
        time: "4:00 PM - 6:30 PM",
        venue: "CS Seminar Hall 2"
      },
      {
        id: "ws-102",
        clubId: "robotics-club",
        clubName: "Robotics & Automation Society",
        category: "Technical",
        title: "Hands-on Arduino & Line Follower Bot Workshop",
        day: "16",
        month: "OCT",
        time: "2:30 PM - 5:30 PM",
        venue: "Robotics Lab, Block B"
      },
      {
        id: "ws-103",
        clubId: "drama-club",
        clubName: "Navrang Drama & Theatre Club",
        category: "Cultural",
        title: "Improvisation & Stage Presence Masterclass",
        day: "20",
        month: "OCT",
        time: "5:00 PM - 7:00 PM",
        venue: "Main Auditorium"
      },
      {
        id: "ws-104",
        clubId: "literary-club",
        clubName: "Orators & Literary Society",
        category: "Literary",
        title: "Model United Nations (MUN) & Public Speaking Prep",
        day: "24",
        month: "OCT",
        time: "3:30 PM - 5:30 PM",
        venue: "Conference Room 1"
      },
      {
        id: "ws-105",
        clubId: "music-club",
        clubName: "Octaves Music Society",
        category: "Cultural",
        title: "Acoustic Guitar & Live Mixing Session",
        day: "28",
        month: "OCT",
        time: "5:30 PM - 7:30 PM",
        venue: "Student Activity Center"
      },
      {
        id: "ws-106",
        clubId: "sports-club",
        clubName: "Titans Campus Sports Club",
        category: "Sports",
        title: "Sports Conditioning & Inter-Hostel Football Trials",
        day: "02",
        month: "NOV",
        time: "6:30 AM - 8:30 AM",
        venue: "University Main Ground"
      }
    ];

    let savedMemberships = JSON.parse(localStorage.getItem("campusHub_memberships")) || [];
    let savedWorkshops = JSON.parse(localStorage.getItem("campusHub_workshops")) || [];
    let activeCategory = "All";

    const clubsGrid = document.getElementById("clubsGrid");
    const categoryTabs = document.getElementById("categoryTabs");
    const clubSearchInput = document.getElementById("clubSearchInput");
    const calendarList = document.getElementById("calendarList");
    const eventCategoryFilter = document.getElementById("eventCategoryFilter");
    const primaryClubSelect = document.getElementById("primaryClub");
    const regCountSpan = document.getElementById("regCount");

    function renderClubs() {
      const searchQuery = clubSearchInput.value.trim().toLowerCase();
      const filtered = clubsData.filter((club) => {
        const matchesCategory = activeCategory === "All" || club.category === activeCategory;
        const matchesSearch =
          club.name.toLowerCase().includes(searchQuery) ||
          club.shortDesc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        clubsGrid.innerHTML = `<p style="color: var(--text-muted);">No clubs match your current filter.</p>`;
        return;
      }

      clubsGrid.innerHTML = filtered
        .map(
          (club) => `
          <div class="club-card">
            <div>
              <span class="badge ${club.category}">${club.category}</span>
              <h3>${club.name}</h3>
              <p>${club.shortDesc}</p>
            </div>
            <div class="card-footer">
              <span><strong>${club.members}</strong> Active Members</span>
              <button class="btn-outline" onclick="openClubDetail('${club.id}')">View Details</button>
            </div>
          </div>
        `
        )
        .join("");
    }

    window.openClubDetail = function (clubId) {
      const club = clubsData.find((c) => c.id === clubId);
      if (!club) return;
      const clubWorkshops = workshopsData.filter((w) => w.clubId === clubId);

      document.getElementById("clubDetailContent").innerHTML = `
        <span class="badge ${club.category}">${club.category} Club</span>
        <h2>${club.name}</h2>
        <p style="margin-top:0.4rem; color: var(--text-muted); font-size: 0.94rem;">${club.fullDesc}</p>

        <div class="detail-section">
          <h4>Upcoming Club Workshops</h4>
          ${
            clubWorkshops.length > 0
              ? clubWorkshops
                  .map(
                    (ws) => `
                <div class="ws-mini-item">
                  <div>
                    <strong>${ws.title}</strong>
                    <div style="font-size:0.82rem; color:var(--text-muted);">
                      ${ws.day}${ws.month} | ${ws.time} \vert{}${ws.venue}
                    </div>
                  </div>
                  <button class="btn-primary" onclick="openWorkshopModal('${ws.id}')">Register for Workshop</button>
                </div>
              `
                  )
                  .join("")
              : `<p style="color: var(--text-muted);">No upcoming workshops scheduled.</p>`
          }
        </div>

        <div class="detail-section">
          <h4>Lead Member Contacts</h4>
          ${club.leads
            .map(
              (lead) => `
            <div class="lead-box">
              <div><strong>${lead.name}</strong> (${lead.role})</div>
              <div style="font-size:0.85rem;">
                <a href="mailto:${lead.email}" style="color: var(--primary); text-decoration: none;">${lead.email}</a> \vert{}${lead.phone}
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="detail-section">
          <h4>Social Links & Quick Actions</h4>
          <div class="social-links">
            ${Object.entries(club.socials)
              .map(([platform, url]) => `<a href="${url}" target="_blank" rel="noopener">${platform} &#8599;</a>`)
              .join("")}
          </div>
          <div style="margin-top: 1.15rem;">
            <button class="btn-primary" onclick="prefillClubSignup('${club.id}')">Apply for ${club.name} Membership</button>
          </div>
        </div>
      `;
      document.getElementById("clubDetailModal").classList.add("open");
    };

    window.prefillClubSignup = function (clubId) {
      document.getElementById("clubDetailModal").classList.remove("open");
      primaryClubSelect.value = clubId;
      document.getElementById("register").scrollIntoView({ behavior: "smooth" });
    };

    function renderCalendar(categoryFilter) {
      const filteredEvents =
        categoryFilter === "All"
          ? workshopsData
          : workshopsData.filter((w) => w.category === categoryFilter);

      calendarList.innerHTML = filteredEvents
        .map((ev) => {
          const isRegistered = savedWorkshops.some((item) => item.workshopId === ev.id);
          return `
          <div class="event-item">
            <div class="event-date-box">
              ${ev.month}
              <span>${ev.day}</span>
            </div>
            <div class="event-info">
              <span class="badge ${ev.category}">${ev.clubName}</span>
              <h4>${ev.title}</h4>
              <div class="event-meta">&#128337; ${ev.time} &nbsp;|&nbsp; &#128205; ${ev.venue}</div>
            </div>
            <div>
              ${
                isRegistered
                  ? `<button class="btn-outline" disabled>&#10003; Registered</button>`
                  : `<button class="btn-primary" onclick="openWorkshopModal('${ev.id}')">Register for Workshop</button>`
              }
            </div>
          </div>
        `;
        })
        .join("");
    }

    window.openWorkshopModal = function (workshopId) {
      document.getElementById("clubDetailModal").classList.remove("open");
      const ws = workshopsData.find((w) => w.id === workshopId);
      if (!ws) return;

      document.getElementById("workshopIdInput").value = ws.id;
      document.getElementById("workshopModalTitle").textContent = ws.title;
      document.getElementById("workshopModalMeta").textContent = `${ws.clubName} • ${ws.day} ${ws.month} (${ws.time})`;
      document.getElementById("wsNameError").textContent = "";
      document.getElementById("wsEmailError").textContent = "";
      document.getElementById("workshopRegForm").reset();
      document.getElementById("workshopModal").classList.add("open");
    };

    function updateRegistrationBadge() {
      regCountSpan.textContent = savedMemberships.length + savedWorkshops.length;
    }

    document.addEventListener("DOMContentLoaded", () => {
      renderClubs();
      renderCalendar("All");
      updateRegistrationBadge();

      clubsData.forEach((club) => {
        const opt = document.createElement("option");
        opt.value = club.id;
        opt.textContent = `${club.name} (${club.category})`;
        primaryClubSelect.appendChild(opt);
      });

      categoryTabs.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-btn")) {
          document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
          e.target.classList.add("active");
          activeCategory = e.target.dataset.category;
          renderClubs();
        }
      });

      clubSearchInput.addEventListener("input", renderClubs);
      eventCategoryFilter.addEventListener("change", (e) => renderCalendar(e.target.value));

      document.getElementById("menuToggle").addEventListener("click", () => {
        document.getElementById("navLinks").classList.toggle("show");
      });

      document.getElementById("closeClubModal").onclick = () => document.getElementById("clubDetailModal").classList.remove("open");
      document.getElementById("closeWorkshopModal").onclick = () => document.getElementById("workshopModal").classList.remove("open");
      document.getElementById("closeActivityModal").onclick = () => document.getElementById("activityModal").classList.remove("open");

      document.getElementById("workshopRegForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const wsId = document.getElementById("workshopIdInput").value;
        const name = document.getElementById("wsStudentName").value.trim();
        const email = document.getElementById("wsStudentEmail").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let valid = true;
        document.getElementById("wsNameError").textContent = "";
        document.getElementById("wsEmailError").textContent = "";

        if (name.length < 2) {
          document.getElementById("wsNameError").textContent = "Please enter your full name.";
          valid = false;
        }
        if (!emailRegex.test(email)) {
          document.getElementById("wsEmailError").textContent = "Please enter a valid email address.";
          valid = false;
        }
        if (!valid) return;

        const ws = workshopsData.find((w) => w.id === wsId);
        savedWorkshops.push({
          workshopId: ws.id,
          title: ws.title,
          clubName: ws.clubName,
          date: `${ws.day} ${ws.month}`,
          studentName: name
        });

        localStorage.setItem("campusHub_workshops", JSON.stringify(savedWorkshops));
        updateRegistrationBadge();
        renderCalendar(eventCategoryFilter.value);
        document.getElementById("workshopModal").classList.remove("open");
      });

      document.getElementById("membershipForm").addEventListener("submit", (e) => {
        e.preventDefault();
        ["nameError", "idError", "emailError", "yearError", "clubError", "interestError", "motivationError"].forEach(
          (id) => (document.getElementById(id).textContent = "")
        );

        const fullName = document.getElementById("fullName").value.trim();
        const studentId = document.getElementById("studentId").value.trim();
        const email = document.getElementById("email").value.trim();
        const year = document.getElementById("yearSelect").value;
        const primaryClub = document.getElementById("primaryClub").value;
        const motivation = document.getElementById("motivation").value.trim();
        const checkedInterests = Array.from(
          document.querySelectorAll('input[name="interest"]:checked')
        ).map((cb) => cb.value);

        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (fullName.length < 3) { document.getElementById("nameError").textContent = "Full name must be at least 3 characters."; isValid = false; }
        if (studentId.length < 4) { document.getElementById("idError").textContent = "Enter a valid Student ID / Roll Number."; isValid = false; }
        if (!emailRegex.test(email)) { document.getElementById("emailError").textContent = "Enter a valid college email address."; isValid = false; }
        if (!year) { document.getElementById("yearError").textContent = "Please select your year of study."; isValid = false; }
        if (!primaryClub) { document.getElementById("clubError").textContent = "Please choose a club to join."; isValid = false; }
        if (checkedInterests.length === 0) { document.getElementById("interestError").textContent = "Please select at least one area of interest."; isValid = false; }
        if (motivation.length < 15) { document.getElementById("motivationError").textContent = "Please write at least 15 characters."; isValid = false; }

        if (!isValid) return;

        const selectedClubObj = clubsData.find((c) => c.id === primaryClub);
        savedMemberships.push({
          fullName,
          studentId,
          clubName: selectedClubObj ? selectedClubObj.name : primaryClub,
          interests: checkedInterests
        });

        localStorage.setItem("campusHub_memberships", JSON.stringify(savedMemberships));
        updateRegistrationBadge();

        const successBox = document.getElementById("formSuccessMsg");
        successBox.textContent = `Application submitted! Welcome to ${selectedClubObj.name}, ${fullName}.`;
        successBox.style.display = "block";
        document.getElementById("membershipForm").reset();
        setTimeout(() => (successBox.style.display = "none"), 5000);
      });

      document.getElementById("viewMyActivityBtn").addEventListener("click", () => {
        const container = document.getElementById("activityContent");
        let html = `<div class="detail-section"><h4>Club Memberships (${savedMemberships.length})</h4>`;
        if (savedMemberships.length === 0) {
          html += `<p style="color: var(--text-muted); font-size: 0.9rem;">No membership applications submitted yet.</p>`;
        } else {
          html += savedMemberships
            .map(
              (m) => `
            <div class="lead-box">
              <div>
                <strong>${m.clubName}</strong> — ${m.fullName} (${m.studentId})
                <div style="font-size:0.8rem; color:var(--text-muted);">Interests: ${m.interests.join(", ")}</div>
              </div>
              <span class="badge Technical" style="margin:0;">Active</span>
            </div>
          `
            )
            .join("");
        }
        html += `</div><div class="detail-section"><h4>Workshop Bookings (${savedWorkshops.length})</h4>`;
        if (savedWorkshops.length === 0) {
          html += `<p style="color: var(--text-muted); font-size: 0.9rem;">No workshops registered yet.</p>`;
        } else {
          html += savedWorkshops
            .map(
              (w) => `
            <div class="lead-box">
              <div>
                <strong>${w.title}</strong> (${w.clubName})
                <div style="font-size:0.8rem; color:var(--text-muted);">Attendee: ${w.studentName} • Date: ${w.date}</div>
              </div>
              <span class="badge Sports" style="margin:0;">Confirmed</span>
            </div>
          `
            )
            .join("");
        }
        html += `</div>`;
        container.innerHTML = html;
        document.getElementById("activityModal").classList.add("open");
      });
    });