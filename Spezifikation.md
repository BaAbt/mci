![logo](prakt/spez/logo.png)

# Einleitung

Dieses Dokument gliedert sich nach den Artefakten des Praktikums. Ab
Meilenstein 2 werden die vorhandenen Artefakte auf Basis von Feedback
und Evaluationen überarbeitet.

Was in den jeweiligen Abschnitten zu erbringen ist, wird immer über
*\[Platzhalter\]* gekennzeichnet. Hierbei gibt es zwei Arten von
Kennzeichnungen:

### *\[Artefakt/e\]*

Platzhalter für das jeweilige Artefakt welches es anzufertigen bzw. zu
überarbeiten gilt z.B. Personas.

### *\[Erläuterung\]*

Platzhalter für eine Erläuterung des jeweiligen Artefakts. Hierbei ist
keine Erläuterung der Methode oder Technik gemeint, sondern vielmehr
eine Begründung von Entscheidungen. Warum wurden ausgerechnet diese
Personas erstellt? Warum sind Elemente im Wireframe wie im Artefakt
ersichtlich angeordnet?\
Dieser Punkt ist essenziell für das Bewertungskriterium „Dokumentation".
Der wichtigste Anhaltspunkt ist hierbei das Feedback seitens
Praktikumsbetreuer und im Review.

**Sie schreiben in Schwarz!**

# Szenario

Nach Ihrem erfolgreichen Studium sind Sie Mitarbeiter/-in der
Softwareschmiede \"Best Practice GmbH\". Ihr Unternehmen konzentriert
sich auf maßgeschneiderte Softwarelösungen und die Digitalisierung von
Arbeitsprozessen.

Das neueste Projekt, welches gleichzeitig Ihren Einstieg in den
Geschäftsalltag darstellt, erhielt Ihr Unternehmen durch die
\"TH-Köln\".

Am Campus Gummersbach ist es mit entsprechenden Berechtigungen möglich,
Transponder zum Öffnen von Räumen auszuleihen. Der Prozess zum
Ausleihen, dem Prüfen von Berechtigungen, als auch dem Verleihen von
Berechtigungen erfolgt dabei rein auf ausgedruckten Listen.

Die Raumverantwortlichen übermitteln hierzu Berechtigungen an die
Pforte. Hier führen die Mitarbeiter/-innen an der Pforte eine Liste mit
allen Schlüsseln und den dazugehörigen Personen, die die Berechtigung
zum Ausleihen eines Transponders besitzen. Ein Transponder kann dabei
mehrere Räume öffnen. Möchte eine Person nun einen Transponder
ausleihen, ist es durch die Mitarbeiter/-innen an der Pforte notwendig,
die Person und seine entsprechende Berechtigung in den entsprechenden
Listen zu überprüfen. Besitzt diese Person die entsprechende
Berechtigung, trägt sie sich mit Datum, Uhrzeit und Namen in eine
Verleihliste ein.

Die aktuelle Handhabung ist sehr pflege-intensiv und widerspricht den
Leitkriterien guter Usability nach DIN ISO 9241-11: Effektivität,
Effizienz und Zufriedenheit.

Ihre Aufgabe ist es, den Transponderverleih der TH Köln am Campus
Gummersbach zu optimieren. Hierzu entwickeln Sie im Laufe des Projekts
ein Konzept, welches sie prototypisch implementieren und testen.

# Spezifikation

## Nutzungskontext verstehen und beschreiben

### Stakeholder Analyse

[//]: # (https://tableconvert.com/)

#### Changelog

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              



#### *\[Artefakt/e\]*

##### __**Ausleihender  - primary stakeholder**__

__Ziele__

möchte schnell und einfach in für ihn relevanten Räumen arbeiten können. 

__Einstellung zum Projekt:__

positiv

__Einfluss des Stakeholders:__

direkt (niedrig)

__Impact/Machteinfluss:__

hoch

##### __**Papierverkäufer  - Antiuser**__

__Ziele:__

Verdient Geld damit Papier zu verkaufen, das zur aktuellen Verwaltung verwendet wird.

__Einstellung zum Projekt:__

negativ

__Einfluss des Stakeholders:__

indirekt (sehr niedrig)

__Impact/Machteinfluss:__

sehr gering

##### __**Pförtner - primary stakeholder**__

__Ziele:__

Er möchte Transponder ausleihen und über den Status aller Transponder informiert werden.

__Einstellung zum Projekt:__

positiv

__Einfluss des Stakeholders:__

direkt (hoch)

__Impact/Machteinfluss:__

hoch

##### __**technik ablehnender Pförtner - primary stakeholder**__

__Ziele:__

Möchte, das alles so bleibt wie es ist da nur er das aktuelle System versteht und er dadurch eine gesicherte Stelle hat

__Einstellung zum Projekt:__

negativ

__Einfluss des Stakeholders:__

direkt (mittel)

__Impact/Machteinfluss:__

mittel

##### __**Raumverantwortlicher - primary stakeholder**__

__Ziele:__

Verwaltet Zugriff auf die ihn zugewiesenen Räume.
Sort dafür, das sie immer in einem guten Zustand sind.

__Einstellung zum Projekt:__

positiv

__Einfluss des Stakeholders:__

direkt (hoch)

__Impact/Machteinfluss:__

mittel

##### __**Administrator - primary stakeholder**__

__Ziele:__

Wartet fertiges System,
sowie Räume und Verantwortlicher.
Sorgt dafür, das das System sicher und stabil läuft

__Einstellung zum Projekt:__

neutral

__Einfluss des Stakeholders:__

direkt (mittel)

__Impact/Machteinfluss:__

mittel

##### __**Auftraggeber - primary stakeholder**__

__Ziele:__

Will die TH-Koeln effizienter machen

__Einstellung zum Projekt:__

positiv

__Einfluss des Stakeholders:__

direkt (niedrig)

__Impact/Machteinfluss:__

hoch

#### *\[Erläuterung\]*

Die hier dargestellten primären Stakeholder sind die hauptsächlichen Nutzer des Systems. 
Diese sind die Personen, welche tagtäglich mit dem System in Berührung kommen werden und damit am wichtigsten fuer uns sind.
Das gemeinsame Ziel dieser ist es, das bestehende System effizienter zu machen.
 
Die hier dargestellten Anti-User haben dabei eher eine kleinen Einfluss.
Deswegen werden wir vor allem auf die Stakeholder Ausleihender, Pförtner, Raumverantwortlicher und Administrator eingegehen.

### User Profiles

#### Changelog

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
10.5.2020  | initial commit          | damit es da ist                             
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              



#### *\[Artefakt/e\]*

#### *\[Erläuterung\]*

### Personas

#### Changelog

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              

#### *\[Artefakt/e\]*

#### *\[Erläuterung\]*

## Nutzungsanforderungen spezifizieren

[ ]{.underline}

## Gestaltungslösungen entwickeln, die die Nutzungsanforderungen
erfüllen**

[ ]{.underline}

### Storyboards

#### Changelog

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              

#### *\[Artefakte\]*

\newpage

BaAbt

![BaAbt](prakt/m2/ba_abt/storyboard_1.jpeg)

![BaAbt](prakt/m2/ba_abt/storyboard_2.jpeg)

![BaAbt](prakt/m2/ba_abt/storyboard_3.jpeg)

![BaAbt](prakt/m2/ba_abt/storyboard_4.jpeg)

\newpage

#### *\[Erläuterung\]*

### Figma Prototyp

#### Changelog

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              

#### *\[Artefakt/e\]*

#### *\[Erläuterung\]*

**Identifizierte Probleme aus dem Review**

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              

[ ]{.underline}

### Funktionaler Prototyp

#### Changelog

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              

#### *\[Artefakt/e\]*

#### *\[Erläuterung\]*

### Review

#### Changelog

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              

#### *\[Artefakt/e\]*

## Usability Evaluation

[ ]{.underline}

### Usability-Test Testplan

#### Changelog

[//]: # (https://tableconvert.com/)

 **Datum** | **Was wurde geändert?** | **Warum wurde es geändert?** 
-----------|-------------------------|------------------------------
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              
           |                         |                              

#### *\[Artefakt/e\]*

#### *\[Erläuterung\]*
